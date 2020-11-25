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


test('all spaces have an occupied or unoccupied ring (not both)', () => {
  render(<Board />);
  for(var i = 0; i < 60; i++){
    const space = document.getElementById('space' + i.toString());
    const occupied_ring = space.querySelector('.occupied_ring');
    const unoccupied_ring = space.querySelector('.unoccupied_ring');
    
    if(occupied_ring != null && occupied_ring != undefined){
      expect(unoccupied_ring).not.toBeTruthy()
    } else {
      expect(unoccupied_ring).toBeTruthy()
    }
  }
});
