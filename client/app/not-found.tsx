"use client";

import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <SearchX className="h-12 w-12 text-muted-foreground" />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold tracking-tight">404</h1>

        <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

        <p className="mt-4 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist, has been moved, or
          the URL is incorrect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
