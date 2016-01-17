import isolate from '@cycle/isolate';
import {a, div, button, input} from '@cycle/dom';

import {Observable} from 'rx';

export default function App ({DOM, HTTP}) {
  return {
    DOM: Observable.just(div('Hi!'))
  };
}
