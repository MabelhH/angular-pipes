import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'pipesTesting'
})
export class PipesTestingPipe implements PipeTransform {

  transform(value: Number, cambiar: string): string {
    if(cambiar == '1' ){
      return ' €'+value;
    }else{
      return ' $'+value;
    }
  }

}
