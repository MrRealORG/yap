import { useId, type ReactNode } from "react";
import "./Settings.css";

interface SettingsGroupProps {
  title: string;
  children: ReactNode;
}

/** A titled card that holds a list of setting rows. */
export function SettingsGroup({ title, children }: SettingsGroupProps) {
  const titleId = useId();

  return (
    <section className="settings-group" aria-labelledby={titleId}>
      <h2 id={titleId} className="settings-group__title">
        {title}
      </h2>
      <div className="settings-group__card">{children}</div>
    </section>
  );
}
