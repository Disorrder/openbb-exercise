import { Skeleton } from "@mui/material";
import { IStat } from "../utils/stats.type";
import { Dictionary, TrailNode } from "../utils/transform";
import TreeNode from "./TreeNode";

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

  return (
    <div className="TreeView w-full overflow-y-auto rounded-md">
      {data.map((node) => (
        <TreeNode value={node} level={1} key={node.key} />
      ))}
    </div>
  );
}
