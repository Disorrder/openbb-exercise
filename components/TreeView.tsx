import { IStat } from "../utils/stats.type";
import { Dictionary, TrailNode } from "../utils/transform";
import TreeNode from "./TreeNode";

interface Props {
  value: Dictionary<TrailNode<IStat>>;
}

export default function TreeView({ value }: Props) {
  return (
    <div className="TreeView w-full overflow-y-auto rounded-md">
      {value.map((node) => (
        <TreeNode value={node} level={1} key={node.key} />
      ))}
    </div>
  );
}
