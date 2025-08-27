"use client";

import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react";

interface NotificationsProps {
  showTestToast?: boolean;
  className?: string;
}

export default function Notifications({ showTestToast = false, className }: NotificationsProps) {
  useEffect(() => {
    if (showTestToast) {
      toast.success("Notifications initialized successfully!");
    }
  }, [showTestToast]);

  return (
    <Toaster
      className={className}
      position="top-right"
      expand={false}
      richColors={false}
      closeButton={true}
      duration={3500}
      toastOptions={{
        className: "bg-card border-border text-card-foreground shadow-lg",
        style: {
          borderRadius: "var(--radius-md)",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "var(--font-sans)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06)",
        },
        unstyled: false,
      }}
      icons={{
        success: <CheckCircle className="w-4 h-4 text-green-500" />,
        error: <XCircle className="w-4 h-4 text-destructive" />,
        warning: <AlertCircle className="w-4 h-4 text-orange-500" />,
        info: <Info className="w-4 h-4 text-primary" />,
      }}
      offset="16px"
      gap={8}
      visibleToasts={4}
      theme="light"
    />
  );
}

// Convenience API for other components
export const notify = {
  success: (message: string, options?: Parameters<typeof toast.success>[1]) =>
    toast.success(message, options),
  error: (message: string, options?: Parameters<typeof toast.error>[1]) =>
    toast.error(message, options),
  warning: (message: string, options?: Parameters<typeof toast.warning>[1]) =>
    toast.warning(message, options),
  info: (message: string, options?: Parameters<typeof toast.info>[1]) =>
    toast.info(message, options),
  promise: toast.promise,
  dismiss: toast.dismiss,
  loading: (message: string, options?: Parameters<typeof toast.loading>[1]) =>
    toast.loading(message, options),
};