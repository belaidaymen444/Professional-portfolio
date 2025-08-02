"use client";

import { toast as sonnerToast } from 'sonner';

// Safe wrapper around toast to prevent JSON parsing errors
export const safeToast = {
  success: (message: string, options?: any) => {
    try {
      return sonnerToast.success(message, options);
    } catch (error) {
      console.warn('Toast error:', error);
      // Fallback to alert if toast fails
      alert(`✅ ${message}`);
    }
  },
  error: (message: string, options?: any) => {
    try {
      return sonnerToast.error(message, options);
    } catch (error) {
      console.warn('Toast error:', error);
      // Fallback to alert if toast fails
      alert(`❌ ${message}`);
    }
  },
  info: (message: string, options?: any) => {
    try {
      return sonnerToast.info(message, options);
    } catch (error) {
      console.warn('Toast error:', error);
      alert(`ℹ️ ${message}`);
    }
  }
};

export { safeToast as toast };
