import { render, screen } from '@testing-library/react';
import StockData from '../components/StockData';

let selectedStockData = {
    "id": 4,
    "name": "VMWare",
    "symbol": "VMW",
    "last_price": 165,
    "market_cap": "1.5T",
    "tag": "favorite"
}

test('renders with data', () => {
  render(<StockData selectedStockData={selectedStockData}/>);
  const nameElement = screen.getByText(/VMWare/i);
  const marketCapElement = screen.getByText(/1.5T/i);
  const tagElement = screen.getByText(/favorite/i);
  const headerElement = screen.getByText(/Stock Detail/i);
  expect(headerElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(marketCapElement).toBeInTheDocument();
  expect(tagElement).toBeInTheDocument();
});

test('renders tag filter label', () => {
  render(<StockData selectedStockData={null}/>);
  expect(screen.queryByText(/Stock Detail/i)).not.toBeInTheDocument();
});
