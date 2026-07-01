export type ProjectType = "SCRUM" | "KANBAN";

export type ProjectVisibility = "PRIVATE" | "PUBLIC";

export type ProjectRole = "ADMIN" | "MEMBER" | "VIEWER";

export type ProjectFeature =
  | "BOARD"
  | "TASKS"
  | "SPRINTS"
  | "BACKLOG"
  | "MILESTONES"
  | "CALENDAR"
  | "FILES"
  | "TIME_TRACKING";

export interface ProjectMember {
  userId: string;
  role: ProjectRole;
}

export interface ProjectFormValues {
  name: string;
  key: string;
  description: string;

  type: ProjectType;

  visibility: ProjectVisibility;

  color: string;

  icon?: File | null;

  startDate: Date;

  endDate?: Date;

  features: ProjectFeature[];

  members: ProjectMember[];
}

export interface Project {
  id: string;

  workspaceId: string;

  name: string;

  key: string;

  slug: string;

  description?: string;

  icon?: string;

  color: string;

  type: ProjectType;

  visibility: ProjectVisibility;

  ownerId: string;

  startDate: Date;

  endDate?: Date;

  createdAt: Date;

  updatedAt: Date;
}

export interface ProjectSummary {
  owner: string;

  projectType: ProjectType;

  visibility: ProjectVisibility;

  membersCount: number;

  enabledFeatures: ProjectFeature[];

  color: string;

  icon?: string;
}

export interface InviteMember {
  id: string;

  name: string;

  email: string;

  avatar?: string;
}

export interface CreateProjectResponse {
  success: boolean;

  message: string;

  project: Project;
}

export const PROJECT_FEATURES: ProjectFeature[] = [
  "BOARD",
  "TASKS",
  "SPRINTS",
  "BACKLOG",
  "MILESTONES",
  "CALENDAR",
  "FILES",
  "TIME_TRACKING",
];

export const PROJECT_COLORS = [
  "#2563EB",
  "#7C3AED",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#EAB308",
  "#EC4899",
  "#6B7280",
];

export const PROJECT_ROLES: ProjectRole[] = ["ADMIN", "MEMBER", "VIEWER"];

export const DEFAULT_FEATURES: ProjectFeature[] = [
  "BOARD",
  "TASKS",
  "SPRINTS",
  "BACKLOG",
  "MILESTONES",
];
