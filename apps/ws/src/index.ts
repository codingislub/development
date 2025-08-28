import { WebSocketServer } from "ws";
import {client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {
    await client.user.create({
        data: {
            username: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
        }
    })
    ws.send("Welcome to the WebSocket server!");
})