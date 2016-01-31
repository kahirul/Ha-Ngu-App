import {Component} from 'angular2/core';
import * as moment from 'moment';

import {CommentItem} from './comment.item';

@Component({
  selector: 'comment',
  template: `
    <p calss='card-text text-small'>
      <small class='text-muted'>{{ comment.by }} &mdash; {{ prettyTime }}</small>
      <br>
      <small>{{ comment.text }}</small>
    </p>
  `,
  inputs: ['comment']
})

export class CommentComponent {
  public comment: CommentItem;

  get prettyTime(): string {
    return moment.unix(this.comment.time).fromNow();
  }
}

