'use client'

import { FormEvent, useRef } from 'react'
import { decimalToBinary, binaryToDecimal, hexToDecimal, decimalToHex, hexToBinary, binaryToHex } from '@/utils/functions'
export default function Calculator(){
    const input = useRef<HTMLInputElement>(null)
    const output = useRef<HTMLInputElement>(null)
    const selectInput = useRef<HTMLSelectElement>(null)
    const selectOutput = useRef<HTMLSelectElement>(null)

    const matrix = [
        [(): string=>{ return ""}, decimalToHex, decimalToBinary],
        [hexToDecimal, (): string=>{ return ""}, hexToBinary],
        [binaryToDecimal, binaryToHex, (): string=>{ return ""}]
    ]
    
    const submitEvent = (event:FormEvent)=>{
        event.preventDefault();
        console.log("First Step")
        if(selectInput?.current?.value == "" || selectOutput?.current?.value == "") return;
        console.log("Second Step")
        if(selectInput?.current?.value == selectOutput?.current?.value){output?.current?.setAttribute("value", input?.current?.value || ""); return;}
        console.log("Third Step")
        console.log(`Values = `, {
            Selected: selectInput?.current?.value,
            OutputSelected: selectOutput?.current?.value,
            Input: input?.current?.value
        })
        console.log(binaryToDecimal("1010"))
        console.log(matrix[2][0]("1010"))
        output?.current?.setAttribute("value", matrix[parseInt(selectInput?.current?.value || "0") || 0][parseInt(selectOutput?.current?.value || "0") || 0](input?.current?.value || ""))

    }
    return(
        <div className={`max-w-[800px] mx-auto`}>
            <form action="" className={`grid grid-cols-3`} onSubmit={(event)=>{submitEvent(event)}}>
                <div>
                    <select ref={selectInput} name="inputSelect" id="inputSelect" className={`text-black`}>
                        <option value="" className={`hidden`}>Select the base</option>
                        <option value="0">Decimal</option>
                        <option value="1">Hexadecimal</option>
                        <option value="2">Binary</option>
                    </select>
                </div>
                <p></p>
                <div>
                    <select ref={selectOutput} name="outputSelect" id="outputSelect" className={`text-black`}>
                        <option value="" className={`hidden`}>Select the output</option>
                        <option value="0">Decimal</option>
                        <option value="1">Hexadecimal</option>
                        <option value="2">Binary</option>
                    </select>
                </div>
                <input type="text" ref={input} className={`text-black`}/>
                <button>Calculate</button>
                <input type="text" ref={output} className={`text-black`}/>
            </form>
        </div>
    )
}