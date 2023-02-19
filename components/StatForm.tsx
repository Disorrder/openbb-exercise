import { useTree } from "../context/tree.context";

interface Props {
  // value: Dictionary<TrailNode<IStat>>[number];
}

export default function StatForm(props: Props) {
  const { selected, setSelected } = useTree();

  if (!selected)
    return <div className="StatForm">Select something in left sidebar</div>;

  return <div className="StatForm">StatForm {selected?.trailmap}</div>;
}
