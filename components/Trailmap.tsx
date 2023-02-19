import { IStat } from '../utils/stats.type';
import { Dictionary, TrailNode } from '../utils/transform';
import TrailmapHierarchy from './TrailmapHierarchy';

interface Props {
  trailmap: Dictionary<TrailNode<IStat>>;
}

export default function Trailmap({ trailmap }: Props) {
  return (
    <div className="Trailmap w-full overflow-y-auto rounded-md">
      <TrailmapHierarchy trailmap={trailmap} />
    </div>
  );
}
