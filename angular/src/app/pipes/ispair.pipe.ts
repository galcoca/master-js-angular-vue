import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'isPair'
})

export class IsPairPipe implements PipeTransform{
    
    transform(value: any) {
        let pair = "Is not Pair";
        if(value % 2 == 0){
            pair = "Is Pair"
        }
        return "The year is " + value + " " + pair;
    }

}