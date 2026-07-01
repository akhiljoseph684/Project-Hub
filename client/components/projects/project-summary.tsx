"use client";

import { UseFormReturn } from "react-hook-form";
import {
  CalendarDays,
  FolderKanban,
  Globe,
  Lock,
  Palette,
  Users,
} from "lucide-react";

import { CreateProjectInput } from "@/lib/validations/project";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";

interface ProjectSummaryProps {
  form: UseFormReturn<CreateProjectInput>;
}

export default function ProjectSummary({ form }: ProjectSummaryProps) {
  const values = form.watch();

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Project Summary</CardTitle>

        <CardDescription>
          Review your project before creating it.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">

        <div>
          <h3 className="font-semibold">{values.name || "Untitled Project"}</h3>

          <p className="text-sm text-muted-foreground">{values.key || "KEY"}</p>
        </div>

        <Separator />


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderKanban className="h-4 w-4 text-primary" />

            <span className="text-sm">Workflow</span>
          </div>

          <Badge>{values.type}</Badge>
        </div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {values.visibility === "PRIVATE" ? (
              <Lock className="h-4 w-4" />
            ) : (
              <Globe className="h-4 w-4" />
            )}

            <span className="text-sm">Visibility</span>
          </div>

          <Badge variant="secondary">{values.visibility}</Badge>
        </div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />

            <span className="text-sm">Members</span>
          </div>

          <Badge variant="outline">{values.members.length}</Badge>
        </div>


        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1 h-4 w-4" />

          <div className="text-sm">
            <p className="font-medium">Timeline</p>

            <p className="text-muted-foreground">
              {values.startDate
                ? new Date(values.startDate).toLocaleDateString()
                : "--"}
            </p>

            <p className="text-muted-foreground">
              {values.endDate
                ? new Date(values.endDate).toLocaleDateString()
                : "No end date"}
            </p>
          </div>
        </div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />

            <span className="text-sm">Theme Color</span>
          </div>

          <div
            className="h-6 w-6 rounded-full border"
            style={{
              backgroundColor: values.color,
            }}
          />
        </div>

        <Separator />


        <div>
          <h4 className="mb-3 text-sm font-medium">Enabled Features</h4>

          <div className="flex flex-wrap gap-2">
            {values.features.length > 0 ? (
              values.features.map((feature) => (
                <Badge key={feature} variant="secondary">
                  {feature.replaceAll("_", " ")}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                No features selected.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
