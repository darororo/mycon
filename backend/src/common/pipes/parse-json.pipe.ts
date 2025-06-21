import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class ParseJsonPipe implements PipeTransform {
  transform(value: any) {
    try {
      return JSON.parse(value);
    } catch {
      log(value);
      throw new BadRequestException('Invalid JSON');
    }
  }
}
