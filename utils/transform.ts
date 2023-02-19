export type TrailNode<T> = T & {
  trailmap: string;
};

export type TrailMap<T> = {
  [key: string]: TrailNode<T> | TrailMap<T>;
};

export type DictLeaf<T> = T & {
  key: string;
};

export type DictNode<T> = {
  key: string;
  children: Dictionary<T>;
};

export type Dictionary<T> = Array<DictLeaf<T> | DictNode<T>>;

/** Receives trailmap, makes the transformation and returns a json transformed */
export function transform<T>(map: TrailMap<T>): Dictionary<TrailNode<T>> {
  const result: Dictionary<TrailNode<T>> = [];

  for (const key in map) {
    const value = map[key];

    if ('trailmap' in value) {
      result.push({
        key,
        ...(value as TrailNode<T>),
      });
    } else {
      const node: DictNode<TrailNode<T>> = {
        key,
        children: transform(value),
      };
      result.push(node);
    }
  }

  return result;
}
