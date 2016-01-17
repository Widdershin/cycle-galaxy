import isolate from '@cycle/isolate';
import {a, div, button, input} from '@cycle/dom';

import {Observable} from 'rx';

function megaSun ({x, y}) {
  return (
    div('.mega-sun', {style: {top: y, left: x}})
  );
}

function sun ({x, y}) {
  return (
    div('.sun', {style: {top: y, left: x}})
  );
}

function planet ({x, y}) {
  return (
    div('.planet', {style: {top: y, left: x}})
  );
}

export default function App ({DOM, HTTP}) {
  return {
    DOM: Observable.just(
      div('.galaxy', [
        megaSun({x: '50%', y: '50%'}),
        sun({x: '50%', y: '70%'}),
        planet({x: '50%', y: '80%'})
      ])
    )
  };
}
