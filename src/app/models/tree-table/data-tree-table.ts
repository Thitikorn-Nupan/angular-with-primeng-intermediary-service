import {TreeNode} from "primeng/api";

export class DataTreeTable<T> implements TreeNode {

  public data : T; // as array
  public children : TreeNode<T>[];

  constructor(data: T, children: TreeNode<T>[]) {
    this.data = data;
    this.children = children;
  }

}
