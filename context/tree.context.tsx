import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext<any>({});

export function TreeProvider({ children }) {
  const [selected, setSelected] = useState<string | null>(null);

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
