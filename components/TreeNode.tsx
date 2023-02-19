import React from "react";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import cn from "classnames";

import { useTree } from "../context/tree.context";
import { IStat } from "../utils/stats.type";
import { Dictionary, TrailNode } from "../utils/transform";

interface Props {
  value: Dictionary<TrailNode<IStat>>[number];
  level: number;
}

export default function TreeNode({ value, level }: Props) {
  const { selected, setSelected } = useTree();
  const [open, setOpen] = React.useState(false);

  const hasChildren = "children" in value;

  const className = cn(
    "TreeNode",
    "flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors",
    // `pl-${level * 4}`, // Idk why Tailwind can't handle it
    {
      "pl-8": level === 2,
      "pl-12": level === 3,
      "pl-16": level === 4,
      "pl-20": level === 5,
      "pl-24": level === 6,
      "pl-28": level === 7,
      "pl-32": level === 8,
      "pl-36": level === 9,
      "pl-40": level === 10,
    },
    "hover:bg-sky-50",
    selected?.key === value.key && "bg-sky-100"
  );

  function renderIcon() {
    return open ? (
      <IconChevronDown size={20} />
    ) : (
      <IconChevronRight size={20} />
    );
  }

  function handleClick() {
    if ("children" in value) return setOpen(!open);

    setSelected(value.trailmap === selected?.trailmap ? null : value);
  }

  return (
    <>
      <div className={className} onClick={handleClick}>
        <div className="w-[20px]">{hasChildren && renderIcon()}</div>
        <div className="flex-1">{value.key}</div>
        {hasChildren && (
          <div className="text-sm text-gray-400 italic">
            {value.children.length} items
          </div>
        )}
      </div>

      {hasChildren &&
        open &&
        value.children.map((node) => (
          <TreeNode value={node} level={level + 1} key={node.key} />
        ))}
    </>
  );
}
