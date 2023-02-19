import React from "react";
import Head from "next/head";

import { TreeProvider, useTree } from "../context/tree.context";
import { transform } from "../utils/transform";
import { IStat } from "../utils/stats.type";

import TreeView from "../components/TreeView";

import styles from "../styles/Home.module.css";
import TRAILMAP from "../utils/trailmap.json";
import StatForm from "../components/StatForm";

export default function Home(): React.ReactElement {
  const trailmapTransformed = transform<IStat>(TRAILMAP as any);
  // console.log(trailmapTransformed);

  return (
    <TreeProvider>
      <div className={styles.container}>
        <Head>
          <title>OpenBB Exercise</title>
        </Head>

        <div>
          <h2 className={styles.title}>OpenBB Exercise</h2>
          <div className={styles.description}>(by Aleksandr Azarov)</div>
        </div>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <TreeView value={trailmapTransformed} />
          </aside>
          <main className={styles.main}>
            <StatForm />
          </main>
        </div>
      </div>
    </TreeProvider>
  );
}
