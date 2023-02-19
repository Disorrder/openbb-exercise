import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";

import { TreeProvider } from "../context/tree.context";
import TreeView from "../components/TreeView";
import StatForm from "../components/StatForm";

import styles from "../styles/Home.module.css";

export default function Home(): React.ReactElement {
  const { data } = useQuery("data", async () =>
    fetch("/api/data").then((res) => res.json())
  );

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
            <TreeView data={data} />
          </aside>
          <main className={styles.main}>
            <StatForm />
          </main>
        </div>
      </div>
    </TreeProvider>
  );
}
