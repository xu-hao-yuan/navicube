const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key, anthropic-version');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const targetUrl = req.url.slice(1);
    if (!targetUrl || (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://'))) {
        res.writeHead(400);
        res.end('Usage: http://localhost:' + PORT + '/https://target-api.com/path');
        return;
    }

    const parsedUrl = url.parse(targetUrl);
    const mod = parsedUrl.protocol === 'https:' ? https : http;

    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        body = Buffer.concat(body);
        const headers = { ...req.headers };
        delete headers.host;
        delete headers['proxy-connection'];

        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.path,
            method: req.method,
            headers: headers
        };

        const proxyReq = mod.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });

        proxyReq.on('error', (e) => {
            res.writeHead(502);
            res.end('Proxy error: ' + e.message);
        });

        if (body.length > 0) proxyReq.write(body);
        proxyReq.end();
    });
});

server.listen(PORT, () => {
    console.log('CORS Proxy running on http://localhost:' + PORT);
    console.log('Usage: http://localhost:' + PORT + '/https://target-api.com/path');
});
