import ws, { WebSocketServer as Server } from 'ws'
import http from 'http'

/**
 * Copied from:
 * https://github.com/tinyhttp/tinyws/blob/master/src/index.ts
 */

export interface TinyWSRequest extends http.IncomingMessage {
  ws: () => Promise<ws>
}

/**
 * tinyws - adds `req.ws` method that resolves when websocket request appears
 * @param wsOptions
 */
export const tinyws =
  (wsOptions?: ws.ServerOptions, wss: Server = new Server({ ...wsOptions, noServer: true })) =>
  async (req: TinyWSRequest, _: unknown, next: () => void | Promise<void>) => {
    const upgradeHeader = (req.headers.upgrade || '').split(',').map((s) => s.trim())

    // When upgrade header contains "websocket" it's index is 0
    if (upgradeHeader.indexOf('websocket') === 0) {
      req.ws = () =>
        new Promise((resolve) => {
          wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
            wss.emit('connection', ws, req)
            resolve(ws)
          })
        })
    }

    await next()
  }