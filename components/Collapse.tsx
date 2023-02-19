import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';

interface Props {
  title: React.ReactElement | string;
  children: React.ReactElement;
}

export default function Collapse(props: Props) {
  const { title, children } = props;

  return (
    <div className="Collapse">
      <div className="__trigger flex">
        <IconChevronDown size={20} />
        <div className="__title">{title}</div>
      </div>

      <div className="__content">{children}</div>
    </div>
  );
}
