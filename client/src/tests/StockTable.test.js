import { render, screen } from '@testing-library/react';
import StockTable from '../components/StockTable';

let mockState = {
  "stocks": {
    "1": {
      "id": 1,
      "name": "Apple",
      "symbol": "AAPL",
      "last_price": 133,
      "market_cap": "2.2T",
      "tag": "forFriends"
    },
    "2": {
      "id": 2,
      "name": "Cisco",
      "symbol": "CSCO",
      "last_price": 51,
      "market_cap": "1.2T",
      "tag": "watching"
    },
    "4": {
      "id": 4,
      "name": "VMWare",
      "symbol": "VMW",
      "last_price": 165,
      "market_cap": "1.5T",
      "tag": "favorite"
    }
  },
  "stockTags": [
    "forFriends",
    "watching",
    "favorite"
  ]
}

test('renders with data', () => {
  render(<StockTable stocks={mockState.stocks}
    stockTags={mockState.stockTags} />);
    expect(screen.queryByText(/Symbol/i)).toBeInTheDocument();
    expect(screen.queryByText(/Last Price/i)).toBeInTheDocument();
    expect(screen.queryByText(/Tag /i)).toBeInTheDocument();
    expect(screen.queryByText(/Actions/i)).toBeInTheDocument();
    expect(screen.queryByText(/CSCO/i)).toBeInTheDocument();
    expect(screen.queryByText(/51/i)).toBeInTheDocument();
});

test('renders with out data', () => {
  render(<StockTable selectedStockData={null} />);
  expect(screen.queryByText(/Symbol/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Last Price/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Tag /i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Actions/i)).not.toBeInTheDocument();
});
