"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { Loader2 } from "lucide-react";
import CompleteProfileDialog from "./profile/complete-profile-dialog";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { user, isAuthenticated, loading } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      router.replace("/login");
    }

    if (user && !user.isVerified) {
      router.replace(`/verify-otp?email=${user.email}`);
      return;
    }

    if (!user) return;

    if (user && (!user.firstName || !user.lastName)) {
      setOpen(true);
    }
  }, [loading, isAuthenticated, router, user]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <CompleteProfileDialog open={open} onOpenChange={setOpen} />

      {children}
    </>
  );
}
