import { render, screen } from '@testing-library/react'
import Farm from './Farm' 
import { findTheNeighbours } from './Farm'

test('renders learn react link', () => {
  render(<Farm />)
  const linkElement = screen.getByText(/SqauresVille/i)
  expect(linkElement).toBeInTheDocument()
})

describe('findTheNeighbours', () => {
  const board = [
    [false, true, false, false, false],
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  it('should count the correct number of live neighbors for a cell in the middle of the board', () => {
    expect(findTheNeighbours(1, 1, board)).toBe(2);
  });

  it('should count the correct number of live neighbors for a cell on the edge of the board', () => {
    expect(findTheNeighbours(0, 0, board)).toBe(1);
  });

  it('should count the correct number of live neighbors for a cell in the corner of the board', () => {
    expect(findTheNeighbours(0, 1, board)).toBe(1);
  });

  it('should return 0 for a cell with no live neighbors', () => {
    expect(findTheNeighbours(3, 3, board)).toBe(0);
  });

  it('should handle cells on the boundary correctly without throwing errors', () => {
    expect(() => findTheNeighbours(4, 4, board)).not.toThrow();
  });
});