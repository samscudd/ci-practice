import { render } from '@testing-library/react';
import Board from './Board';

test('renders with DOM tree preserved', () => {
  render(<Board />);
  expect(document.getElementById('SVGRoot').childElementCount).toBeGreaterThan(0);
});


test('all spaces present', () => {
  render(<Board />);
  for(var i = 0; i < 60; i++){
    expect(document.getElementById('space' + i.toString())).toBeTruthy();
  }
});


test('all spaces have an occupied, unoccupied, and suggestion ring', () => {
  render(<Board />);
  for(var i = 0; i < 60; i++){
    const space = document.getElementById('space' + i.toString());
    expect(space.getElementsByClassName('occupied_ring')).toBeTruthy();
    expect(space.getElementsByClassName('unoccupied_ring')).toBeTruthy();
    expect(space.getElementsByClassName('suggestion_ring')).toBeTruthy();
  }
});
