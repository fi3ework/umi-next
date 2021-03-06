export interface IRoute {
  component?: string;
  exact?: boolean;
  path?: string;
  routes?: IRoute[];
  wrappers?: string[];
  __toMerge?: boolean;
  __isDynamic?: boolean;
  [key: string]: any;
}
