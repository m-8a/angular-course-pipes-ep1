import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mypipe"
})
export class MypipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      return "";
    }
    return value;
  }
}
