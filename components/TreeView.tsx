import { UIEvent } from "react";
import { Skeleton } from "@mui/material";
import cn from "classnames";

import { IStat } from "../utils/stats.type";
import { Dictionary, TrailNode } from "../utils/transform";
import TreeNode from "./TreeNode";

import styles from "./TreeView.module.css";

interface Props {
  data: Dictionary<TrailNode<IStat>>;
}

export default function TreeView({ data }: Props) {
  if (!data) {
    return (
      <div className="w-full flex flex-col p-2">
        {new Array(10).fill(0).map((_, i) => (
          <Skeleton key={i} variant="text" className="w-full text-4xl" />
        ))}
      </div>
    );
  }

  const className = cn(
    "TreeView w-full overflow-y-auto rounded-md",
    styles.TreeView
  );

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const { scrollTop, scrollHeight, clientHeight, children } = target;

    // Hide invisible nodes to improve performance
    // Guess all nodes have the same height

    const visibleGap = 3;

    const avgElementHeight = scrollHeight / children.length;
    const firstVisibleIndex = Math.max(
      0,
      Math.floor(scrollTop / avgElementHeight) - visibleGap
    );
    const lastVisibleIndex = Math.min(
      children.length - 1,
      Math.floor((scrollTop + clientHeight) / avgElementHeight) + visibleGap
    );

    target.style.setProperty(
      "--gap-before",
      `${firstVisibleIndex * avgElementHeight}px`
    );
    target.style.setProperty(
      "--gap-after",
      `${(children.length - 1 - lastVisibleIndex) * avgElementHeight}px`
    );

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (i < firstVisibleIndex || i > lastVisibleIndex) {
        child.style.display = "none";
      } else {
        child.style.display = "";
      }
    }
  }

  return (
    <div className={className} onScroll={handleScroll}>
      {data.map((node, i) => (
        <TreeNode value={node} level={1} key={node.key} />
      ))}
    </div>
  );
}
