import type { ColorName } from "@app/shared/types";
import type { ReactNode } from "react";

export type LayoutProps = {
  backgroundColor?: ColorName;
  children: ReactNode;
};
