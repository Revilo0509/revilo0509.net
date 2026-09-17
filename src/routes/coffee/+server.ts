import { json, type RequestHandler } from "@sveltejs/kit";

const tea: RequestHandler = () => {
    return json("I'm a teapot", { status: 418 });
};

export const GET = tea;
export const POST = tea;
