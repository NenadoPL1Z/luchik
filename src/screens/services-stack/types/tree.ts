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
  // eslint-disable-next-line
  image: any;
  list: string[];
  children?: TreeChildren[];
  content?: TreeContent[];
};
