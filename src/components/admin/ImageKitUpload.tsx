"use client";

import * as React from "react";
import { toast } from "sonner";
import { upload } from "@imagekit/next";
import { CheckCircle2, LoaderCircle, UploadCloud } from "lucide-react";
import { getFirebaseAuth } from "@/lib/firebase/client";

const inputClass = "mt-1.5 w-full rounded-md border border-[#d8cec0] bg-white px-3 py-2.5 text-sm font-normal text-[#14383b] outline-none focus:border-[#cf6943] focus:ring-2 focus:ring-[#cf6943]/20";

type ImageKitUploadProps = {
  value?: string;
  onChange?: (url: string) => void;
  onUploaded?: (url: string) => void;
  folder: string;
  label?: string;
  compact?: boolean;
};

type UploadCredentials = {
  token: string;
  expire: number;
  signature: string;
  publicKey: string;
};

const MAX_IMAGE_DIMENSION = 1000;
const WEBP_QUALITY = 0.82;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function canvasToWebp(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("This browser could not optimize the image.")), "image/webp", WEBP_QUALITY);
  });
}

async function optimizeImage(file: File) {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    throw new Error("This image format could not be processed. Please use JPEG, PNG or WebP.");
  }

  try {
    const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) throw new Error("This browser could not prepare the image for upload.");
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(bitmap, 0, 0, width, height);
    const blob = await canvasToWebp(canvas);
    const baseName = file.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9.-]+/g, "-") || "image";
    return {
      file: new File([blob], `${baseName}.webp`, { type: "image/webp", lastModified: Date.now() }),
      width,
      height,
      originalSize: file.size,
      optimizedSize: blob.size,
    };
  } finally {
    bitmap.close();
  }
}

export default function ImageKitUpload({ value = "", onChange, onUploaded, folder, label = "Image path or URL", compact = false }: ImageKitUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const chooseFile = () => inputRef.current?.click();

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage("Please choose an image file.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setMessage("The image must be smaller than 20 MB.");
      return;
    }

    const auth = getFirebaseAuth();
    const user = auth?.currentUser;
    if (!user) {
      setMessage("Sign in as an administrator before uploading.");
      return;
    }

    setUploading(true);
    setProgress(0);
    setMessage("Optimizing image…");
    try {
      const optimized = await optimizeImage(file);
      const idToken = await user.getIdToken();
      const authenticationResponse = await fetch("/api/imagekit-auth", {
        headers: { Authorization: `Bearer ${idToken}` },
        cache: "no-store",
      });
      const credentials = await authenticationResponse.json() as UploadCredentials & { error?: string };
      if (!authenticationResponse.ok) throw new Error(credentials.error || "Could not authorize the upload.");

      const result = await upload({
        file: optimized.file,
        fileName: optimized.file.name,
        folder,
        useUniqueFileName: true,
        tags: ["himkala-admin"],
        token: credentials.token,
        expire: credentials.expire,
        signature: credentials.signature,
        publicKey: credentials.publicKey,
        onProgress: (event) => setProgress(event.total ? Math.round((event.loaded / event.total) * 100) : 0),
      });
      if (!result.url) throw new Error("ImageKit did not return the uploaded image URL.");
      onChange?.(result.url);
      onUploaded?.(result.url);
      setProgress(100);
      setMessage(`Image optimized from ${formatBytes(optimized.originalSize)} to ${formatBytes(optimized.optimizedSize)} (${optimized.width}×${optimized.height}px) and uploaded to ImageKit.`);
      toast.success("Image uploaded successfully.");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Could not upload the image.";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className={compact ? "inline-flex flex-col items-start" : "block"}>
      {!compact && onChange && <label className="block text-sm font-semibold text-[#14383b]">{label}<input value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} /></label>}
      <input ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={(event) => void handleFile(event.target.files?.[0])} />
      <button type="button" onClick={chooseFile} disabled={uploading} className={`${compact ? "rounded p-2 hover:bg-[#e4d8c8]" : "mt-2 inline-flex h-10 items-center justify-center rounded-md border border-[#cf6943] px-4 text-sm font-bold text-[#cf6943] hover:bg-[#cf6943]/5"} disabled:cursor-not-allowed disabled:opacity-60`} aria-label={compact ? "Upload and insert an ImageKit image" : "Upload image to ImageKit"} title={compact ? "Upload and insert image" : undefined}>
        {uploading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : compact ? <UploadCloud className="h-4 w-4" /> : <><UploadCloud className="mr-2 h-4 w-4" />Upload to ImageKit</>}
      </button>
      {uploading && !compact && <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e4d8c8]"><div className="h-full bg-[#cf6943] transition-[width]" style={{ width: `${progress}%` }} /></div>}
      {message && <p className={`${compact ? "mt-1 max-w-52 text-[10px]" : "mt-2 text-xs"} ${message.includes("uploaded to ImageKit") ? "text-green-700" : uploading ? "text-[#66706d]" : "text-red-600"}`}><CheckCircle2 className="mr-1 inline h-3 w-3" />{message}</p>}
    </div>
  );
}
