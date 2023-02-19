import { createContext, useContext, useMemo, useState } from "react";
import { IStat } from "../utils/stats.type";
import { DictLeaf, TrailNode } from "../utils/transform";

const Context = createContext({
  selected: null as DictLeaf<TrailNode<IStat>> | null,
  setSelected: (value: DictLeaf<TrailNode<IStat>> | null) => {},
});

export function TreeProvider({ children }) {
  const [selected, setSelected] = useState<DictLeaf<TrailNode<IStat>> | null>(
    null
  );

  const value = useMemo(
    () => ({
      selected,
      setSelected,
    }),
    [selected, setSelected]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useTree() {
  return useContext(Context);
}
