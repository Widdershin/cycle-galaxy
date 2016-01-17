import isolate from '@cycle/isolate';
import {a, div, button, input} from '@cycle/dom';

import {Observable} from 'rx';

function megaSun ({x, y}, t, children) {
  const sunRotation = rotate({x: 0, y: 20}, t / 1000);

  sunRotation.x += x;
  sunRotation.y += y;

  return (
    div('.cluster', [
      div('.mega-sun', {key: 0, style: {top: y + '%', left: x + '%'}}),
      sun(sunRotation, t)
    ])
  );
}

function sun ({x, y}, t) {
  const planetRotation = rotate({x: 100, y: 200}, (t / 400));

  return (
    div('.sun', {key: 1, style: {top: y + '%', left: x + '%'}}, [
      planet(planetRotation)
    ])
  );
}

function planet ({x, y}) {
  return (
    div('.planet', {key: 2, style: {top: y + '%', left: x + '%'}})
  );
}

function rotate ({x, y}, angle) {
  x = parseInt(x, 10);
  y = parseInt(y, 10);

  return {
    x: (x * Math.cos(angle) - y * Math.sin(angle)),
    y: (x * Math.sin(angle) + y * Math.cos(angle))
  };
}

export default function App ({DOM, Animation}) {
  return {
    DOM: Animation.pluck('timestamp').map(t =>
      div('.galaxy', [
        megaSun({x: 50, y: 50}, t)
      ])
    )
  };
}
