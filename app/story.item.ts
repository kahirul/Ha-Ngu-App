import {BaseItem} from './base.item';

export interface StoryItem extends BaseItem {
  descendants: number;
  score: number;
  title: string;
  url: string;
}
