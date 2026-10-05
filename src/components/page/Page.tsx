import type { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Page({ title, description, children }: PageProps) {
  return (
    <section className="page">
      <header className="page__header">
        <h1 className="page__title">{title}</h1>
        {description && <p className="page__description">{description}</p>}
      </header>
      <div className="page__body">{children}</div>
    </section>
  );
}
