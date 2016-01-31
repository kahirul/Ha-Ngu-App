import {BaseItem} from './base.item';

export interface CommentItem extends BaseItem {
  parent: number;
  text: string;
}
