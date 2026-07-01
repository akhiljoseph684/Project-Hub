"use client";

import { UseFormReturn } from "react-hook-form";

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

import { Textarea } from "@/components/ui/textarea";

interface ProjectInformationProps {
  form: UseFormReturn<CreateProjectInput>;
}

export default function ProjectInformation({ form }: ProjectInformationProps) {
  const projectName = form.watch("name");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Information</CardTitle>

        <CardDescription>
          Enter the basic details for your new project.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Project Name *</FormLabel>

              <FormControl>
                <Input placeholder="Website Redesign" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="key"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Project Key *</FormLabel>

                <FormControl>
                  <Input
                    placeholder="WEB"
                    maxLength={6}
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase(),
                      )
                    }
                  />
                </FormControl>

                <p className="text-xs text-muted-foreground">
                  2–6 uppercase letters
                </p>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="rounded-lg border p-4">
            <p className="text-sm font-medium">URL Preview</p>

            <p className="mt-2 break-all text-sm text-muted-foreground">
              /projects/
              {projectName
                ? projectName.trim().toLowerCase().replace(/\s+/g, "-")
                : "project-name"}
            </p>
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea
                  {...field}
                  rows={6}
                  maxLength={500}
                  placeholder="Describe your project..."
                />
              </FormControl>

              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Optional</span>

                <span>{field.value?.length ?? 0}/500</span>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
