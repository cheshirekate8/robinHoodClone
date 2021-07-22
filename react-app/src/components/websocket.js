const socket = new WebSocket('wss://ws.finnhub.io?token=c3st2naad3ide69e8pk0');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AXP'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AMGN'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BA'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'CAT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'CSCO'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'CVX'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'GS'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'HD'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'HON'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IBM'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'INTC'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'JNJ'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'KO'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'JPM'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MCD'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MMM'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MRK'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MSFT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'NKE'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'PG'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'TRV'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'UNH'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'CRM'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'VZ'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'V'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'WBA'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'WMT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'DIS'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'DOW'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'TSLA'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'SNAP'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'NFLX'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'FB'}))
});

// socket data comes back in this format
  // its an object, and socket.data is an array of objects.
  // {
  //   "data": [{
  //   "c":["1","8"],
  //   "p":280.09,
  //   "s":"MSFT",
  //   "t":1626805040397,
  //   "v":100
  // },{
  //   "c":["12"],
  //   "p":280.09,
  //   "s":"MSFT",
  //   "t":1626805040411,
  //   "v":14
  // }],"type":"trade"}

// Listen for messages
// socket.onmessage = function(event) {
//     console.debug("WebSocket message received:", event);
// };

// Listen for errors
// socket.onerror = function(event) {
//     console.error("WebSocket error observed:", event);
// };

// Listen for close
// socket.onclose = function(event) {
//     console.log("WebSocket is closed now.");
// };

// Unsubscribe
// const unsubscribe = function(symbol) {
//     socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
// }

export default socket;