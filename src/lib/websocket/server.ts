import { WebSocketServer } from "ws";

export function createMarketSocketServer(port = 8080) {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (socket) => {
    const interval = setInterval(() => {
      const tick = {
        symbol: "BTCUSDT",
        price: Number((67000 + Math.random() * 500).toFixed(2)),
        timestamp: Date.now()
      };

      socket.send(JSON.stringify(tick));
    }, 1500);

    socket.on("close", () => clearInterval(interval));
  });

  return wss;
}
