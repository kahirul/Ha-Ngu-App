import {StoryItem} from './story.item';
import {CommentItem} from './comment.item';

export var StoryItems: StoryItem[] = [
  {
    by: 'yarapavan',
    descendants: 26,
    id: 10994736,
    kids: [10994790, 10994775, 10995131, 10994823, 10995388, 10995169, 10994847, 10994818, 10995194, 10994787],
    score: 199,
    time: 1454069281,
    title: 'Kinto by Mozilla – An open source Parse alternative',
    type: 'story',
    url: 'https://github.com/Kinto/kinto/'
  },
  {
    by: 'coolvoltage',
    descendants: 17,
    id: 10994885,
    kids: [10995602, 10995095, 10995355, 10995178, 10995021],
    score: 94,
    time: 1454071597,
    title: 'Command line murder',
    type: 'story',
    url: 'https://github.com/veltman/clmystery'
  }
];

export var CommentItems: CommentItem[] = [
  {
    by: '56k',
    id: 10995131,
    kids: [10997467, 10995241, 10996681, 10995276, 10995165],
    parent: 10994736,
    text: 'At this point, Parse is open source, too. Why an open source clone if you can have the original?',
    time: 1454075423,
    type: 'comment'
  },
  {
    by: 'taneq',
    id: 10995169,
    parent: 10994736,
    text: 'From the announcement on the Parse blog, it sounds like Parse might in fact be the open source Parse alternative:<p>&gt; Second, we’re releasing the open source Parse Server, which lets you run most of the Parse API from your own Node.js server.',
    time: 1454075954,
    type: 'comment'
  }
];
