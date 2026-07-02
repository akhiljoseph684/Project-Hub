"use client";

import { Camera } from "lucide-react";

import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  preview: string | null;
  onChange: (file: File | null) => void;
}

export default function ProfileAvatarUpload({ preview, onChange }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="h-28 w-28">
        {preview ? (
          <Image
            src={preview}
            alt="Avatar"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        ) : (
          <AvatarFallback>
            <Camera className="h-8 w-8" />
          </AvatarFallback>
        )}
      </Avatar>

      <label
        htmlFor="avatar"
        className="cursor-pointer rounded-md border px-4 py-2 text-sm hover:bg-muted"
      >
        Upload Avatar
      </label>

      <input
        id="avatar"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
}
