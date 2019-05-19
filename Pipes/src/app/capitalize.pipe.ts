import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    // let arr = value.split(" ");
    // let arrTmp = [];
    // for(let i = 0; i < arr.length; i++) {
    // 	arrTmp.push(arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase());
    // }
  	
    // return arrTmp.join(' ');

    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join(' ');

  }

}
