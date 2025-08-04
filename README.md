# Discord Proxy

A simple proxy server built with Express and `http-proxy-middleware` to proxy requests to Discord.

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd discord-proxy
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To build and start the proxy server:

```bash
npm run dev
```

The proxy will be running on `http://localhost:8080`. All requests to this address will be proxied to `https://discord.com/`.