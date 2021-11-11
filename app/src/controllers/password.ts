// password controller

import { Request, Response } from "express"

export const generate = (req: Request, res: Response): Response => {
  return res.json({ password: Math.random().toString(36).slice(-8) });
}
