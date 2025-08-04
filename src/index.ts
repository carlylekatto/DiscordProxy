import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  "/",
  createProxyMiddleware({
    target: "https://discord.com/",
    changeOrigin: true,
    secure: false,
  })
);

app.listen(PORT, () => {
  console.log(`Proxy running on :${PORT}`);
});