export interface IMenuConfig {
  /** 唯一id */
  id: string;
  /** 中文名 */
  name: string;
  /** 菜单icon */
  icon?: string;
  /** url */
  url?: string;
  /** 是否被激活 */
  active?: boolean;
  /** 子项 */
  children?: IMenuConfig[];
}
