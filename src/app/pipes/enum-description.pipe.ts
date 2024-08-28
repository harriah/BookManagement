import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription'
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(value: string | null, types: { code: string, name: string }[]): string | null {
    if (!value) {
      return null;
    }
    const foundType = types.find(type => type.code === value);
    return foundType ? foundType.name : null;
  }
}
