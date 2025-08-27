"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Star, FileInput, FileCheck2, CircleArrowRight, X } from "lucide-react";

interface ReviewFormData {
  rating: number;
  feedback: string;
  displayName: string;
  nationality: string;
  tours: string;
  attachments: File[];
}

interface FileUpload {
  file: File;
  id: string;
  uploading: boolean;
  progress: number;
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    feedback: "",
    displayName: "",
    nationality: "",
    tours: "",
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

  const ratingDescriptors = {
    0: "",
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  useEffect(() => {
    const savedDraft = localStorage.getItem("reviewForm-draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed.formData }));
        setCharCount(parsed.formData.feedback?.length || 0);
        setLastSaved(new Date(parsed.timestamp));
      } catch {
        console.error("Failed to load draft");
      }
    }
  }, []);

  const saveDraft = useCallback(() => {
    if (
      formData.rating > 0 ||
      formData.feedback.trim() ||
      formData.displayName ||
      formData.nationality
    ) {
      const draftData = { formData, timestamp: new Date().toISOString() };
      localStorage.setItem("reviewForm-draft", JSON.stringify(draftData));
      setLastSaved(new Date());
    }
  }, [formData]);

  useEffect(() => {
    const timeoutId = setTimeout(saveDraft, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData, saveDraft]);

  const clearDraft = () => {
    localStorage.removeItem("reviewForm-draft");
    setFormData({
      rating: 0,
      feedback: "",
      displayName: "",
      nationality: "",
      tours: "",
      attachments: [],
    });
    setFileUploads([]);
    setCharCount(0);
    setLastSaved(null);
    setErrors({});
    toast.success("Draft cleared");
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
    if (errors.rating) setErrors((prev) => ({ ...prev, rating: "" }));
  };

  const handleFeedbackChange = (feedback: string) => {
    setFormData((prev) => ({ ...prev, feedback }));
    setCharCount(feedback.length);
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).slice(0, 3 - fileUploads.length);
    const validFiles = newFiles.filter((file) => {
      const isValidType =
        file.type.startsWith("image/") ||
        file.type === "application/pdf" ||
        file.type === "text/plain";
      const isValidSize = file.size <= 10 * 1024 * 1024;
      if (!isValidType) toast.error(`${file.name} is not supported`);
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
      }, 1000);
    });
  };

  const removeFile = (id: string) =>
    setFileUploads((prev) => prev.filter((u) => u.id !== id));

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
    if (formData.rating === 0) newErrors.rating = "Please select a rating";
    if (!formData.displayName.trim()) newErrors.displayName = "Name is required";
    if (!formData.nationality.trim()) newErrors.nationality = "Please enter your nationality";
    if (!formData.tours.trim()) newErrors.tours = "Experience field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return toast.error("Please complete all required fields");
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.removeItem("reviewForm-draft");
      toast.success("Review submitted successfully!");
      setShowSuccess(true);
    } catch {
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="pt-[250px] sm:pt-[150px]">
        <div className="w-full max-w-2xl mx-auto bg-[#EAF2FF] rounded-lg shadow-lg border border-[#BFDFFF] p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#BFDFFF] rounded-full flex items-center justify-center">
              <FileCheck2 className="w-8 h-8 text-[#3C6AA6]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-[#3C6AA6]">
            Thank you for your review!
          </h2>
          <p className="text-[#5A91D1] mb-6">
            Your feedback is valuable for us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[250px] sm:pt-[150px]">
      <div className="w-full max-w-4xl mx-auto bg-[#EAF2FF] rounded-lg shadow-lg border border-[#BFDFFF]">
        {/* Header */}
        <div className="p-6 border-b border-[#BFDFFF] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#3C6AA6]">Leave a Review</h1>
          {lastSaved && (
            <div className="text-xs text-[#5A91D1]">
              Draft saved {lastSaved.toLocaleTimeString()}
            </div>
          )}
        </div>

        <div className="p-6 space-y-8">
          {/* Rating */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Rating</label>
            <div className="flex items-center gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  type="button"
                  key={rating}
                  onClick={() => handleRatingChange(rating)}
                  className={`p-2 rounded-full ${
                    formData.rating >= rating ? "text-[#FFD166]" : "text-[#5A91D1]"
                  }`}
                >
                  <Star className="w-6 h-6" fill="currentColor" />
                </button>
              ))}
            </div>
            {formData.rating > 0 && (
              <p className="text-sm text-[#5A91D1] mt-1">
                {ratingDescriptors[formData.rating as 1 | 2 | 3 | 4 | 5]}
              </p>
            )}
            {errors.rating && (
              <p className="text-xs text-red-500 mt-1">{errors.rating}</p>
            )}
          </div>

          {/* Feedback */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Your Feedback</label>
            <Textarea
              value={formData.feedback}
              onChange={(e) => handleFeedbackChange(e.target.value)}
              rows={4}
              className="mt-2"
            />
            <div className="text-xs text-[#5A91D1] mt-1">{charCount} characters</div>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Name</label>
            <Input
              value={formData.displayName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, displayName: e.target.value }))
              }
              className="mt-2"
            />
            {errors.displayName && (
              <p className="text-xs text-red-500 mt-1">{errors.displayName}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Nationality</label>
            <Input
              value={formData.nationality}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, nationality: e.target.value }))
              }
              className="mt-2"
            />
            {errors.nationality && (
              <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>
            )}
          </div>

          {/* Tours */}
          <div>
            <label className="text-sm font-medium text-[#3C6AA6]">Experience</label>
            <Input
              value={formData.tours}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, tours: e.target.value }))
              }
              className="mt-2"
            />
            {errors.tours && (
              <p className="text-xs text-red-500 mt-1">{errors.tours}</p>
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
                  Drag and drop files here, or{" "}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[#3C6AA6] hover:underline"
                  >
                    browse
                  </button>
                </p>
                <p className="text-xs text-[#5A91D1]">
                  Up to 3 files • Max 10MB each • Images, PDF, TXT
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
                Upload Photos
              </Button>
              <p className="text-xs text-[#5A91D1] text-center">
                Up to 3 files • Max 10MB each • Images, PDF, TXT
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.txt"
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
                Submit Review
                <CircleArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
