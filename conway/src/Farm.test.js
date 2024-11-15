import { render, screen } from '@testing-library/react'
import Farm from './Farm'

test('renders learn react link', () => {
  render(<Farm />)
  const linkElement = screen.getByText(/SqauresVille/i)
  expect(linkElement).toBeInTheDocument()
})
