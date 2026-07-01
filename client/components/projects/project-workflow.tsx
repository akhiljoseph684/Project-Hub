"use client";

import { UseFormReturn } from "react-hook-form";
import { FolderKanban, KanbanSquare } from "lucide-react";

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

import { Badge } from "@/components/ui/badge";

interface ProjectWorkflowProps {
  form: UseFormReturn<CreateProjectInput>;
}

export default function ProjectWorkflow({ form }: ProjectWorkflowProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Workflow</CardTitle>

        <CardDescription>
          Select the workflow your team will use.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>

              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="grid gap-6 md:grid-cols-2"
                >

                  <label
                    htmlFor="scrum"
                    className={`cursor-pointer rounded-xl border p-6 transition-all hover:border-primary ${
                      field.value === "SCRUM"
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                  >
                    <RadioGroupItem
                      id="scrum"
                      value="SCRUM"
                      className="sr-only"
                    />

                    <FolderKanban className="mb-5 h-10 w-10 text-primary" />

                    <h3 className="text-lg font-semibold">Scrum</h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Sprint-based agile workflow with backlog planning.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge>Backlog</Badge>

                      <Badge>Sprint Planning</Badge>

                      <Badge>Board</Badge>

                      <Badge>Tasks</Badge>

                      <Badge>Milestones</Badge>
                    </div>
                  </label>

                  <label
                    htmlFor="kanban"
                    className={`cursor-pointer rounded-xl border p-6 transition-all hover:border-primary ${
                      field.value === "KANBAN"
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                  >
                    <RadioGroupItem
                      id="kanban"
                      value="KANBAN"
                      className="sr-only"
                    />

                    <KanbanSquare className="mb-5 h-10 w-10 text-primary" />

                    <h3 className="text-lg font-semibold">Kanban</h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Continuous workflow with no sprint planning.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge>Board</Badge>

                      <Badge>Tasks</Badge>

                      <Badge>Workflow</Badge>

                      <Badge>Milestones</Badge>
                    </div>
                  </label>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-6 rounded-lg border bg-muted/30 p-4">
          <h4 className="mb-2 font-medium">Selected Workflow</h4>

          {form.watch("type") === "SCRUM" ? (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Sprint Planning</p>

              <p>✓ Product Backlog</p>

              <p>✓ Sprint Backlog</p>

              <p>✓ Story Points</p>

              <p>✓ Burndown Charts</p>
            </div>
          ) : (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Continuous Workflow</p>

              <p>✓ Drag & Drop Board</p>

              <p>✓ WIP Limits</p>

              <p>✓ Cycle Time Tracking</p>

              <p>✗ Sprint Planning Disabled</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
