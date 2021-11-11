// ip controller

import { Request, Response } from "express";

export const obtain = (req: Request, res: Response): Response => {
  return res.json({ 
    ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null 
  });
}
