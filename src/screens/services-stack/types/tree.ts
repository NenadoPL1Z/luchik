import type { JSX } from "react";

export type TreeContent = {
  title: string;
  render: () => JSX.Element;
};

export type TreeChildren = {
  title: string;
  content: TreeContent[];
};

export type Tree = {
  title: string;
  image: string;
  list: string[];
  children: TreeChildren[];
};
