export interface IStat {
  parms: Record<string, IParm>;
}

export interface IParm {
  type: ParmType;
  default: ParmValue;
  required: boolean;
}

export type ParmType =
  | "_empty"
  | "bool"
  | "int"
  | "float"
  | "str"
  | "DataFrame"
  | "PortfolioEngine"; // TODO: extract all types
export type ParmValue = null | number | string;
