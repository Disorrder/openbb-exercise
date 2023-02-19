import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';

import { IStat } from '../utils/stats.type';
import { Dictionary, DictLeaf, TrailNode } from '../utils/transform';

interface Props {
  trailmap: Dictionary<TrailNode<IStat>>;
}

export default function TrailmapHierarchy({ trailmap }: Props) {
  function renderNode(node: DictLeaf<TrailNode<IStat>>) {
    return <div>{node.trailmap}</div>;
  }

  return trailmap.map((node) => (
    <Accordion key={node.key} disableGutters>
      <AccordionSummary
        expandIcon={<IconChevronDown size={20} />}
        sx={{
          flexDirection: 'row-reverse',
          gap: '8px',
        }}
      >
        {node.key}
      </AccordionSummary>
      <AccordionDetails>
        {'children' in node ? (
          <TrailmapHierarchy trailmap={node.children} />
        ) : (
          renderNode(node)
        )}
      </AccordionDetails>
    </Accordion>
  ));
}
