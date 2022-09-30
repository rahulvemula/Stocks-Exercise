import { useState } from "react";
import { Button, Table, Form } from 'react-bootstrap';

/**
 * Stock Table component to display the tag filter and the table of stocks
 * 
 * @param {*} props 
 */
function StockTable(props) {
  let { stocks, setSelectedStockId, removeStock, stockTags } = props;
  const [selectedTag, setSelectedTag] = useState("");

  /**
   * Function to change the selected tag as per selction
   * 
   * @param {*} event 
   */
  const handleChange = (event) => {
    setSelectedTag(event.target.value);
  };

  return (
    <div>
      {stocks &&
        <>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3 StockTable_Select_tag">
              <Form.Label>Tag Filter : </Form.Label>
              <Form.Select onChange={handleChange}>
                <option value="">All</option>
                {stockTags.map((tag) => (<option key={tag} value={tag}>{tag}</option>))}
              </Form.Select>
            </div>
          </div>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>Tag</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(stocks).filter((stock) => (
                selectedTag === "" ? true : stock.tag === selectedTag
              )).map((stock, index) => (
                <tr key={index} className="StockTable_table_row">
                  <td><Button variant="link" onClick={() => setSelectedStockId(stock.id)}>{stock.symbol}</Button></td>
                  <td>{stock['last_price']}</td>
                  <td><span>{stock.tag}</span></td>
                  <td><div className="StockTable_table_actions"><Button variant="light" onClick={() => { removeStock(stock.id) }}>x</Button></div></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      }
    </div>
  );
}

export default StockTable;