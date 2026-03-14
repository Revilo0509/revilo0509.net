import type { RequestHandler } from './$types';
import { presence } from '$lib/discord';

export const GET: RequestHandler = () => {
    let interval: NodeJS.Timeout;

    const stream = new ReadableStream({
        start(controller) {
            const encoder = new TextEncoder();

            const send = () => {
                try {
                    const data = JSON.stringify({ status: presence?.status ?? 'offline' });
                    controller.enqueue(encoder.encode(`data: ${data}\n\n`));
                } catch {
                    clearInterval(interval);
                }
            };

            send();
            interval = setInterval(send, 5000);
        },
        cancel() {
            if (interval) clearInterval(interval);
        },
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
        },
    });
};
