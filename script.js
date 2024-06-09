document.addEventListener("DOMContentLoaded", () => {
    const intlStocksList = document.getElementById('intl-stocks-list');
    const indianStocksList = document.getElementById('indian-stocks-list');

    const API_KEY = 'ILY444OSRM6SSBVJ';  // Replace with your actual API key
    const BASE_URL = 'https://www.alphavantage.co/query';

    const fetchStockData = async (symbol, listElement) => {
        try {
            const response = await fetch(`${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
            const data = await response.json();
            const stockData = data["Global Quote"];
            const stockItem = document.createElement('div');
            stockItem.className = 'stock-item';
            stockItem.innerHTML = `
                <span>${stockData['01. symbol']}</span>
                <span>${stockData['05. price']}</span>
            `;
            listElement.appendChild(stockItem);
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    const internationalStocks = ['AAPL', 'GOOGL', 'AMZN'];
    const indianStocks = ['RELIANCE.BSE', 'TCS.BSE', 'INFY.BSE'];

    internationalStocks.forEach(symbol => fetchStockData(symbol, intlStocksList));
    indianStocks.forEach(symbol => fetchStockData(symbol, indianStocksList));
});
