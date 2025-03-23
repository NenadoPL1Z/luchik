import type { ReactNode } from "react";
import type { IconName } from "@app/shared/ui";

export type TextBlockProps = {
  icon: IconName;
  title: string;
  children?: ReactNode;
};
