import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagColor'
})
export class TagColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case "sucré":
        return "beige";
      case "yummy":
        return "pink";
      case "dessert":
        return "orange";
      case "chocolat":
        return "#bf7056"; 
      case "framboises":
        return "#de506a";
      case "fruits":
        return "green";
      case "poires":
        return "lime"; 
      case "bananes":
        return "yellow"; 
      default:
        return "#c9c9c9";
    }
  }

}
