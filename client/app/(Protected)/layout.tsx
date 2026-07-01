import { ReactNode } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r md:block">
          <Sidebar />
        </aside>

        <div className="flex min-h-screen flex-col md:ml-72">
          <header className="sticky top-0 z-40 border-b bg-background">
            <Navbar />
          </header>

          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
