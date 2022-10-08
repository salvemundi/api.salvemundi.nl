import { Injectable, NestMiddleware } from '@nestjs/common';
import { Client } from "@microsoft/microsoft-graph-client";

@Injectable()
export class AzuremiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
