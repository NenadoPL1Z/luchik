import type { JSX } from "react";

export type ServiceTreeContent = {
  title: string;
  subtitle?: string;
  render?: () => JSX.Element;
};

export type ServiceTreeChildren = {
  title: string;
  content: ServiceTreeContent[];
};

export type ServiceTree = {
  title: string;
  // eslint-disable-next-line
  image: any;
  list: string[];
  children?: ServiceTreeChildren[];
  content?: ServiceTreeContent[];
};
