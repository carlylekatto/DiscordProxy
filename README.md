# Discord Proxy Server

A simple and lightweight proxy server for Discord, built with Express and `http-proxy-middleware`. This server allows you to proxy requests to the official Discord API, which can be useful for various development and testing purposes.

## Features

- **Proxy to Discord**: All requests to the server are proxied to `https://discord.com/`.
- **Easy to Configure**: The server can be easily configured to use a different port.
- **Lightweight**: Built with a minimal set of dependencies.
- **Cross-Origin Support**: Configured to handle cross-origin requests.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/discord-proxy.git
    cd discord-proxy
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

To build and start the proxy server, run the following command:

```bash
npm run dev
```

The server will start on `http://localhost:8080` by default. All requests to this address will be proxied to `https://discord.com/`.

## Configuration

You can configure the server by modifying the `src/index.ts` file.

-   **Port**: To change the port, you can set the `PORT` environment variable or modify the following line in `src/index.ts`:

    ```typescript
    const PORT = process.env.PORT || 8080;
    ```

-   **Proxy Options**: The `http-proxy-middleware` options can be customized in the `createProxyMiddleware` configuration in `src/index.ts`. For more information on the available options, please refer to the [`http-proxy-middleware` documentation](https://github.com/chimurai/http-proxy-middleware).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.