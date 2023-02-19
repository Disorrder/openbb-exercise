import { useTree } from '../context/tree.context';
import { IStat } from '../utils/stats.type';
import { Dictionary, TrailNode } from '../utils/transform';
import Collapse from './Collapse';

interface Props {
  value: Dictionary<TrailNode<IStat>>;
}

export default function TreeNode({ value }: Props) {
  return (
    <>
      {value.map((node) => {
        if ('children' in node) {
          return (
            <Collapse title={node.key}>
              <TreeNode value={node.children} />
            </Collapse>
          );
        }

        return TreeLeaf(node);
      })}
    </>
  );
}

function TreeLeaf(node: TrailNode<IStat>) {
  const { setSelected } = useTree();

  function handleClick() {
    setSelected(node.trailmap);
  }

  return (
    <div className="TreeNode" onClick={handleClick}>
      {node.trailmap}
    </div>
  );
}
