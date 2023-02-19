import React from 'react';
import Head from 'next/head';

import { TreeProvider } from '../context/tree.context';
import { transform } from '../utils/transform';
import { IStat } from '../utils/stats.type';

import TreeView from '../components/TreeView';

import styles from '../styles/Home.module.css';
import TRAILMAP from '../utils/trailmap.json';

export default function Home(): React.ReactElement {
  const trailmapTransformed = transform<IStat>(TRAILMAP);
  console.log(trailmapTransformed);

  return (
    <TreeProvider>
      <div className={styles.container}>
        <Head>
          <title>OpenBB Exercise</title>
        </Head>

        <h2 className={styles.title}>OpenBB Exercise</h2>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <TreeView value={trailmapTransformed} />
          </aside>
          <main className={styles.main}>
            <TreeView value={trailmapTransformed} />
          </main>
        </div>
      </div>
    </TreeProvider>
  );
}
