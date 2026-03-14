import { WebSocketServer, WebSocket } from 'ws';
import type { RequestHandler } from './$types';
import { presence } from '$lib/discord';

let wss: WebSocketServer;

export const GET: RequestHandler = ({ platform }) => {
    if (!wss) {
        const server = (platform as { server?: ReturnType<typeof import('http').createServer> })
            .server;

        wss = new WebSocketServer({
            server,
            path: '/api/presence',
        });

        wss.on('connection', (socket: WebSocket) => {
            const status = presence?.status ?? 'offline';

            socket.send(JSON.stringify({ status }));

            socket.on('close', () => {
                console.log('client disconnected');
            });
        });
    }

    return new Response('WebSocket server running');
};
