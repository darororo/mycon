import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseJsonPipe implements PipeTransform {
  transform(value: any) {
    try {
      return JSON.parse(value);
    } catch {
      throw new BadRequestException('Invalid JSON');
    }
  }
}
