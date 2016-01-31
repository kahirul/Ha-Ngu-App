import {StoryItems, CommentItems} from './mock.items';
import {CommentItem} from './comment.item';
import {Injectable} from 'angular2/core';

@Injectable()
export class ItemService {
  getStories() {
    return Promise.resolve(StoryItems);
  }

  getComments() {
    return Promise.resolve(CommentItems);
  }

  // Remove this
  getCommentsSlowly() {
    return new Promise<CommentItem[]>(resolve =>
      setTimeout(() => resolve(CommentItems), 2000)
    );
  }
}
