import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {StoryItem} from './story.item';
import {CommentItem} from './comment.item';
import {ItemService} from './item.service';
import {CommentComponent} from './comment.component';

@Component({
  selector: 'feeds',
  directives: [CommentComponent],
  templateUrl: 'app/feed.component.html'
})

export class FeedComponent implements OnInit {
  public comments: CommentItem[];
  public stories: StoryItem[];

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
    this.getStories();
    this.getComments();
  }

  getStories() {
    this._itemService.getStories().then(stories => this.stories = stories);
  }

  getComments() {
    this._itemService.getComments().then(comments => this.comments = comments);
  }

}
