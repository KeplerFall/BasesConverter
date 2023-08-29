export function binaryToDecimal(arg: string|number): string{
    if(typeof arg == "number") arg = arg.toString().toLowerCase();
    arg = arg.replace(/^(0+)/g,"").split("").reverse().join("");
    let total = 0;

    for(let i = 0; i < arg.length; i++){
        total += (2**i) * parseInt(arg[i]);
    }

    return total.toString();
}

export function hexToDecimal(arg: string|number): string{
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

    return total.toString();
}

export function decimalToBinary(arg: number|string): string{
    console.log("Entrei no decimal To binary")
    if(typeof arg == "string"){arg.toLowerCase(); arg = parseInt(arg)}
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

export function decimalToHex(arg: string|number): string{
    interface Table {
        [key: string|number]: string
    }

    const table: Table = {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "10": "a",
            "11": "b",
            "12": "c",
            "13": "d",
            "14": "e",
            "15": "f"
    }

    if(typeof arg == "string"){arg.toLowerCase(); arg = parseInt(arg)}

    let hex = ""

    while(arg != 0){
        hex += table[(arg % 16).toString()];
        arg -= arg % 16
        if(arg != 0) arg /= 16
    }

    return hex.split("").reverse().join("")
}

export function hexToBinary(arg: string|number): string{
    const dec = hexToDecimal(arg);
    return decimalToBinary(dec)
}

export function binaryToHex(arg: string|number): string{
    const dec = binaryToDecimal(arg);
    return decimalToBinary(dec)
}