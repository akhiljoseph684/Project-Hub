"use client";

import { UseFormReturn } from "react-hook-form";
import { CalendarDays } from "lucide-react";

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

interface ProjectTimelineProps {
  form: UseFormReturn<CreateProjectInput>;
}

export default function ProjectTimeline({ form }: ProjectTimelineProps) {
  const startDate = form.watch("startDate");
  const endDate = form.watch("endDate");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>

        <CardDescription>
          Define the project's schedule and duration.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date *</FormLabel>

                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value
                        ? new Date(field.value).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? new Date(e.target.value) : undefined,
                      )
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>

                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value
                        ? new Date(field.value).toISOString().split("T")[0]
                        : ""
                    }
                    min={
                      startDate
                        ? new Date(startDate).toISOString().split("T")[0]
                        : undefined
                    }
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? new Date(e.target.value) : undefined,
                      )
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="rounded-xl border bg-muted/40 p-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">Timeline Summary</h3>
          </div>

          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Start:</span>{" "}
              {startDate
                ? new Date(startDate).toLocaleDateString()
                : "Not selected"}
            </p>

            <p>
              <span className="font-medium text-foreground">End:</span>{" "}
              {endDate ? new Date(endDate).toLocaleDateString() : "No end date"}
            </p>

            {startDate && endDate && (
              <p>
                <span className="font-medium text-foreground">Duration:</span>{" "}
                {Math.max(
                  1,
                  Math.ceil(
                    (new Date(endDate).getTime() -
                      new Date(startDate).getTime()) /
                      (1000 * 60 * 60 * 24),
                  ),
                )}{" "}
                day(s)
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
