import type { IconProps } from "@devigner-ui/icons";
import type { ComponentType } from "react";

export type SectionId =
  | "general"
  | "onboarding"
  | "model"
  | "language"
  | "dictionary"
  | "history"
  | "advanced"
  | "about";

export interface NavItem {
  id: SectionId;
  label: string;
  description: string;
  icon: ComponentType<IconProps>;
}
