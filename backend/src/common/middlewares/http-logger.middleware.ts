import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const { statusCode } = res;
    console.log(`${req.method} ${req.originalUrl}`);
    this.logger.log(`${method} ${originalUrl} ${statusCode}`);
    next();
  }
}
