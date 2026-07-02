"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProfileForm from "./profile-form";

interface CompleteProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CompleteProfileDialog({
  open,
  onOpenChange,
}: CompleteProfileDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-lg"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">
            👋 Complete Your Profile
          </DialogTitle>

          <DialogDescription>
            Please complete your profile before continuing.
          </DialogDescription>
        </DialogHeader>

        <ProfileForm onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}
