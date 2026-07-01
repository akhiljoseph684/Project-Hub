"use client";

import { ChangeEvent, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { ImagePlus } from "lucide-react";

import { CreateProjectInput } from "@/lib/validations/project";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const COLORS = [
  "#2563EB",
  "#7C3AED",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#EAB308",
  "#EC4899",
  "#6B7280",
];

interface ProjectAppearanceProps {
  form: UseFormReturn<CreateProjectInput>;
}

export default function ProjectAppearance({ form }: ProjectAppearanceProps) {
  const [preview, setPreview] = useState<string>();

  function handleImageChange(
    e: ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void,
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);

    setPreview(URL.createObjectURL(file));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>

        <CardDescription>Customize your project branding.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">

        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Icon</FormLabel>

              <FormControl>
                <div className="flex items-center gap-6">
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border bg-muted">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Project Icon"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImagePlus className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1">
                    <Input
                      type="file"
                      accept=".png,.jpg,.jpeg,.svg"
                      onChange={(e) => handleImageChange(e, field.onChange)}
                    />

                    <p className="mt-2 text-xs text-muted-foreground">
                      PNG, JPG or SVG (Max 2MB)
                    </p>
                  </div>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme Color</FormLabel>

              <FormControl>
                <div className="flex flex-wrap gap-4">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => field.onChange(color)}
                      style={{
                        backgroundColor: color,
                      }}
                      className={`h-12 w-12 rounded-full border-4 transition-all ${
                        field.value === color
                          ? "border-black dark:border-white scale-110"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </FormControl>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="h-6 w-6 rounded-full border"
                  style={{
                    backgroundColor: field.value,
                  }}
                />

                <span className="text-sm text-muted-foreground">
                  Selected Color
                </span>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
