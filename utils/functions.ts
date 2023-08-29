export function binaryToDecimal(arg: string|number):number{
    if(typeof arg == "number") arg = arg.toString();
    arg = arg.replace(/^(0+)/g,"").split("").reverse().join("");
    let total = 0;

    for(let i = 0; i < arg.length; i++){
        total += (2**i) * parseInt(arg[i]);
    }

    return total;
}

export function hexToDecimal(arg: string|number):number{
    interface Table {
        [key: string|number]: number
    }

    const table: Table = {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "a": 10,
            "b": 11,
            "c": 12,
            "d": 13,
            "e": 14,
            "f": 15
    }

    if(typeof arg == "number") arg = arg.toString()
    arg = arg.replace(/^(0+)/g,"").split("").reverse().join("");
    let total = 0;

    for(let i = 0; i < arg.length; i++){
        total += (16**i) * table[arg[i]];
    }

    return total;
}

export function decimalToBinary(arg: number|string): string{
    if(typeof arg == "string") arg = parseInt(arg)
    let binary = "";

    while(arg != 0){
        if(arg % 2 == 1){
            arg --;
            if(arg != 0) arg /= 2; 
            binary += "1"
        }else{
            arg /= 2;
            binary += "0"
        }
    }

    return binary.split("").reverse().join("");
}

export function decimalToHex(arg: string|number){
    interface Table {
        [key: string|number]: number
    }

    const table: Table = {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "a": 10,
            "b": 11,
            "c": 12,
            "d": 13,
            "e": 14,
            "f": 15
    }

    if(typeof arg == "string") arg = parseInt(arg)

    let hex = ""

    while(arg != 0){
        hex += table[arg % 16].toString();
        arg -= arg % 16
        if(arg != 0) arg /= 16
    }

    return hex.split("").reverse().join("")
}