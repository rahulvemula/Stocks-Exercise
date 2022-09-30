import StockData from './components/StockData';
import StockTable from './components/StockTable';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [stocks, setStocks] = useState([]);
  let [selectedStockId, setSelectedStockId] = useState(null);
  let [stockTags, setstockTags] = useState([]);

  /**
   * Function to delete a stock from list. Calls the DELETE api to delete the stock entry and fetches the latest data.
   * 
   * @param {String} id 
   */
  const removeStock = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/stocks/${id}`, { method: 'DELETE' });
      if (!response.ok)
        alert('Server error');
    } catch (e) {
      alert('Server error');
    } finally {
      await fetchData();
    }
  }

  /**
   * Function to fetch the stock data from server.
   */
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/stocks`);
      let res = await response.json();
      setStocks(res.reduce((accumulator, value) => {
        return { ...accumulator, [value.id]: value };
      }, {}));
    } catch (e) {
      alert('Server error');
    }
  };

  /**
   * Effect to fetch the data from server on initial page load
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Effect to calculate all available tags when stocks are modified.
   */
  useEffect(() => {
    let tags = new Set();
    for (let id in stocks) {
      tags.add(stocks[id].tag);
    }
    setstockTags([...tags]);
  }, [stocks]);

  return (
    <div className="App">
      <StockTable
        stocks={stocks}
        setSelectedStockId={setSelectedStockId}
        removeStock={removeStock}
        stockTags={stockTags}>
      </StockTable>
      <StockData
        selectedStockData={selectedStockId ? stocks[selectedStockId] : null}>
      </StockData>
    </div>
  );
}

export default App;
