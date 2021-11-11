// home controller

import { Request, Response } from "express";

export const welcome = (req: Request, res: Response): Response => {
  return res.json({
    status: 'OK',
    routes: [
      '/ip',
      '/password',
      '/healthcheck'
    ]
  });
}

export const healthcheck = (req: Request, res: Response): Response => {
  return res.json({});
}
