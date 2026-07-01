"use client";

import { UseFormReturn } from "react-hook-form";
import { Lock, Globe } from "lucide-react";

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
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ProjectVisibility({
  form,
}: {
  form: UseFormReturn<CreateProjectInput>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Visibility</CardTitle>

        <CardDescription>Control who can access this project.</CardDescription>
      </CardHeader>

      <CardContent>
        <FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visibility</FormLabel>

              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="grid gap-5 md:grid-cols-2"
                >

                  <label
                    htmlFor="private"
                    className={`cursor-pointer rounded-xl border p-6 transition-all hover:border-primary ${
                      field.value === "PRIVATE"
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                  >
                    <RadioGroupItem
                      id="private"
                      value="PRIVATE"
                      className="sr-only"
                    />

                    <Lock className="mb-4 h-10 w-10 text-primary" />

                    <h3 className="text-lg font-semibold">Private</h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Only invited members can access this project.
                    </p>

                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      <li>✓ Hidden from workspace</li>
                      <li>✓ Invite-only access</li>
                      <li>✓ Better security</li>
                    </ul>
                  </label>


                  <label
                    htmlFor="public"
                    className={`cursor-pointer rounded-xl border p-6 transition-all hover:border-primary ${
                      field.value === "PUBLIC"
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                  >
                    <RadioGroupItem
                      id="public"
                      value="PUBLIC"
                      className="sr-only"
                    />

                    <Globe className="mb-4 h-10 w-10 text-primary" />

                    <h3 className="text-lg font-semibold">Public</h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Everyone in your workspace can view this project.
                    </p>

                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      <li>✓ Visible to workspace</li>
                      <li>✓ Easier collaboration</li>
                      <li>✓ Members can join</li>
                    </ul>
                  </label>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-6 rounded-lg border bg-muted/30 p-4">
          <h4 className="mb-2 font-medium">Current Visibility</h4>

          {form.watch("visibility") === "PRIVATE" ? (
            <p className="text-sm text-muted-foreground">
              🔒 This project is private. Only invited members can access it.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              🌍 This project is public inside your workspace.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
