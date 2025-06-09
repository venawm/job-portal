import { NextFunction, Request, Response } from 'express'
import prisma from '~/prisma'

class UserController {
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      message: 'Get all user sucessful'
    })
  }
}

export const userController: UserController = new UserController()
