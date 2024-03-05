import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, args: unknown): unknown {
    const image = value.split('.');
    if(args === 'name') {
      return image.shift();
    }else if(args === 'ext' && image.length >= 2) {
      return image.pop();
    }else {
      return image;
    }
  }

}
