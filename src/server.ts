import express, { Application } from 'express'

class Server {
  private app: Application

  constructor() {
    this.app = express()
  }

  private setupMiddleware(): void {}

  private setupRoutes(): void {}

  private setupGlobalError(): void {}

  public listenServer() {
    const port = 5000

    this.app.listen(port, () => {
      console.log(`Connected to server with port ${port}`)
    })
  }
}

export default Server
