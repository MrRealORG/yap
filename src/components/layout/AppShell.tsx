import type { ReactNode } from "react";
import { TitleBar } from "@/components/titlebar";
import "./AppShell.css";

interface AppShellProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className="app-shell">
      {sidebar}
      <div className="app-shell__main">
        <TitleBar />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  );
}
