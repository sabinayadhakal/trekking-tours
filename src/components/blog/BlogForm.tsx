"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileInput, FileCheck2, CircleArrowRight, X } from "lucide-react";

interface BlogFormData {
  title: string;
  excerpt: string;
  description: string;
  attachments: File[];
}

interface FileUpload {
  file: File;
  id: string;
  uploading: boolean;
  progress: number;
}

export default function BlogForm() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    description: "",
    attachments: [],
  });

  const [fileUploads, setFileUploads] = useState<FileUpload[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [charCount, setCharCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  // Load draft from localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem("blogForm-draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed.formData }));
        setCharCount(parsed.formData.description?.length || 0);
        setLastSaved(new Date(parsed.timestamp));
      } catch {
        console.error("Failed to load draft");
      }
    }
  }, []);

  const saveDraft = useCallback(() => {
    if (
      formData.title.trim() ||
      formData.excerpt.trim() ||
      formData.description.trim()
    ) {
      const draftData = { formData, timestamp: new Date().toISOString() };
      localStorage.setItem("blogForm-draft", JSON.stringify(draftData));
      setLastSaved(new Date());
    }
  }, [formData]);

  useEffect(() => {
    const timeoutId = setTimeout(saveDraft, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData, saveDraft]);

  const clearDraft = () => {
    localStorage.removeItem("blogForm-draft");
    setFormData({
      title: "",
      excerpt: "",
      description: "",
      attachments: [],
    });
    setFileUploads([]);
    setCharCount(0);
    setLastSaved(null);
    setErrors({});
    toast.success("Draft cleared");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({ ...prev, title }));
    if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
  };

  const handleExcerptChange = (excerpt: string) => {
    setFormData((prev) => ({ ...prev, excerpt }));
    if (errors.excerpt) setErrors((prev) => ({ ...prev, excerpt: "" }));
  };

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({ ...prev, description }));
    setCharCount(description.length);
    if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).slice(0, 5 - fileUploads.length);
    const validFiles = newFiles.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 10 * 1024 * 1024;
      if (!isValidType) toast.error(`${file.name} is not an image`);
      if (!isValidSize) toast.error(`${file.name} is too large (max 10MB)`);
      return isValidType && isValidSize;
    });

    validFiles.forEach((file) => {
      const id = Math.random().toString(36).substr(2, 9);
      const upload: FileUpload = { file, id, uploading: true, progress: 0 };
      setFileUploads((prev) => [...prev, upload]);

      const interval = setInterval(() => {
        setFileUploads((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, progress: Math.min(u.progress + 20, 100) } : u
          )
        );
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setFileUploads((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, uploading: false, progress: 100 } : u
          )
        );
        setFormData((prev) => ({
          ...prev,
          attachments: [...prev.attachments, file],
        }));
      }, 1000);
    });
  };

  const removeFile = (id: string) => {
    setFileUploads((prev) => {
      const removedUpload = prev.find((u) => u.id === id);
      if (removedUpload) {
        setFormData((prev) => ({
          ...prev,
          attachments: prev.attachments.filter((f) => f !== removedUpload.file),
        }));
      }
      return prev.filter((u) => u.id !== id);
    });
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileSelect(e.dataTransfer.files);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.excerpt.trim()) newErrors.excerpt = "Excerpt is required";
    if (!formData.description.trim()) newErrors.description = "Content is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = () => {
  // Basic validation
  if (!formData.title.trim() || !formData.excerpt.trim() || !formData.description.trim()) {
    toast.error("Please complete all required fields");
    return;
  }

  setIsSubmitting(true);

  // Create a promise-based approach
  const submitPromise = new Promise<void>(async (resolve, reject) => {
    try {
      const payload = {
        title: formData.title,
        excerpt: formData.excerpt,
        description: formData.description,
        approval: false
      };

      const response = await fetch("/api/submit-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        resolve();
      } else {
        reject(new Error(`Server error: ${response.status}`));
      }
    } catch (error) {
      reject(error);
    }
  });

  // Handle the promise
  submitPromise
    .then(() => {
      localStorage.removeItem("blogForm-draft");
      toast.success("Blog submitted successfully!");
      setShowSuccess(true);
    })
    .catch((error) => {
      console.error("Submission error:", error);
      toast.error("Failed to submit blog");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
};
  if (showSuccess) {
    return (
      <div className="pt-[150px]">
        <div className="w-full max-w-2xl mx-auto bg-[#EAF2FF] rounded-lg shadow-lg border border-[#BFDFFF] p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#BFDFFF] rounded-full flex items-center justify-center">
              <FileCheck2 className="w-8 h-8 text-[#3C6AA6]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-[#3C6AA6]">
            Thank you for your blog post!
          </h2>
          <p className="text-[#5A91D1] mb-6">
            Your blog is valuable for us. It will be published after approval.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[150px]">
      <div className="w-full max-w-4xl mx-auto bg-[#EAF2FF] rounded-lg shadow-lg border border-[#BFDFFF]">
        {/* Header */}
        <div className="p-6 border-b border-[#BFDFFF] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#3C6AA6]">Write a Blog Post</h1>
          {lastSaved && (
            <div className="text-xs text-[#5A91D1]">
              Draft saved {lastSaved.toLocaleTimeString()}
            </div>
          )}
        </div>

        <div className="p-6 space-y-8">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="mt-2"
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">{errors.title}</p>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Excerpt</label>
            <Input
              value={formData.excerpt}
              onChange={(e) => handleExcerptChange(e.target.value)}
              className="mt-2"
              placeholder="Short description of your blog"
            />
            {errors.excerpt && (
              <p className="text-xs text-red-500 mt-1">{errors.excerpt}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Content</label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              rows={8}
              className="mt-2"
              placeholder="Write your blog content here..."
            />
            <div className="text-xs text-[#5A91D1] mt-1">{charCount} characters</div>
            {errors.description && (
              <p className="text-xs text-red-500 mt-1">{errors.description}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#3C6AA6]">Photos (optional)</label>
            {/* Desktop */}
            <div
              className={`hidden sm:block border-2 border-dashed rounded-lg p-6 transition-colors ${
                dragActive ? "border-[#3C6AA6] bg-[#BFDFFF]" : "border-[#BFDFFF] hover:border-[#3C6AA6]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <FileInput className="w-8 h-8 text-[#3C6AA6] mx-auto mb-2" />
                <p className="text-sm text-[#5A91D1] mb-2">
                  Drag and drop images here, or{" "}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[#3C6AA6] hover:underline"
                  >
                    browse
                  </button>
                </p>
                <p className="text-xs text-[#5A91D1]">
                  Up to 5 files • Max 10MB each • Images only
                </p>
              </div>
            </div>
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-center gap-3">
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-[#3C6AA6] hover:bg-[#1F4880] text-[#EAF2FF] text-base py-6"
              >
                Upload Images
              </Button>
              <p className="text-xs text-[#5A91D1] text-center">
                Up to 5 files • Max 10MB each • Images only
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />

            {/* File Previews */}
            {fileUploads.length > 0 && (
              <div className="space-y-2">
                {fileUploads.map((upload) => (
                  <motion.div
                    key={upload.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-3 bg-[#BFDFFF] rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-[#3C6AA6]">
                        {upload.file.name}
                      </p>
                      <p className="text-xs text-[#5A91D1]">
                        {(upload.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      {upload.uploading && (
                        <div className="w-full bg-[#EAF2FF] rounded-full h-1 mt-1">
                          <div
                            className="bg-[#3C6AA6] h-1 rounded-full transition-all duration-200"
                            style={{ width: `${upload.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(upload.id)}
                      className="text-[#3C6AA6] hover:text-red-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#BFDFFF] flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearDraft}
            className="border-[#3C6AA6] text-[#3C6AA6] hover:bg-[#BFDFFF]"
          >
            Clear draft
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="min-w-[120px] bg-[#3C6AA6] hover:bg-[#1F4880] text-[#EAF2FF]"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Submit Blog
                <CircleArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
