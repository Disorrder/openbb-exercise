import React from "react";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

import { useTree } from "../context/tree.context";
import { IStat } from "../utils/stats.type";
import { Dictionary, TrailNode } from "../utils/transform";
import cn from "classnames";

interface Props {
  value: Dictionary<TrailNode<IStat>>[number];
  level: number;
}

export default function TreeNode({ value, level }: Props) {
  const { selected, setSelected } = useTree();
  const [open, setOpen] = React.useState(false);

  const hasChildren = "children" in value && value.children?.length > 0;

  const className = cn(
    "TreeNode",
    "flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors",
    `pl-${level * 4}`,
    "hover:bg-sky-100"
  );

  function renderIcon() {
    return open ? (
      <IconChevronDown size={20} />
    ) : (
      <IconChevronRight size={20} />
    );
  }

  function handleClick() {
    hasChildren ? setOpen(!open) : setSelected(value);
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
