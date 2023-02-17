import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fliter'
})
export class FliterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
