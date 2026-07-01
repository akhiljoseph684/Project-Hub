import CreateProjectForm from "@/components/projects/create-project-form";

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Create New Project
        </h1>

        <p className="mt-2 text-muted-foreground">
          Set up your project, choose a workflow, invite your team, and start
          collaborating.
        </p>
      </div>

      <CreateProjectForm />
    </div>
  );
}
