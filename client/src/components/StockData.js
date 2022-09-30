/**
 * Component to display the stock detail section for selected stock
 * 
 * @param {*} props 
 */
function StockData(props) {
  let { selectedStockData: stockDetail } = props;
  return (
    <>
      {stockDetail &&
        <div className="StockData_stockDetail">
          <h3>Stock Detail</h3>
          <div className="StockData_details">
            <p><strong>Symbol:</strong><span>{` ${stockDetail.symbol}`}</span></p>
            <p><strong>Name:</strong><span>{` ${stockDetail.name}`}</span></p>
            <p><strong>Market Cap:</strong><span>{` ${stockDetail['market_cap']}`}</span></p>
            <p><strong>Tag:</strong><span>{` ${stockDetail.tag}`}</span></p>
          </div>
        </div>
      }
    </>
  );
}

export default StockData;