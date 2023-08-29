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
        if(selectInput?.current?.value == "" || selectOutput?.current?.value == "") return;
        if(selectInput?.current?.value == selectOutput?.current?.value){output?.current?.setAttribute("value", input?.current?.value || ""); return;}
        output?.current?.setAttribute("value", matrix[parseInt(selectInput?.current?.value || "0") || 0][parseInt(selectOutput?.current?.value || "0") || 0](input?.current?.value || ""))
    }

    return(
        <div className={`max-w-[800px] mx-auto bg-[#f0eedc] px-6 py-24 rounded-lg border border-black`}>
            <form action="" className={`grid grid-cols-3`} onSubmit={(event)=>{submitEvent(event)}}>
                    <select ref={selectInput} name="inputSelect" id="inputSelect" className={`text-black bg-white m-auto mb-6 p-1`}>
                        <option value="" className={`hidden`}>Select the base</option>
                        <option value="0">Decimal</option>
                        <option value="1">Hexadecimal</option>
                        <option value="2">Binary</option>
                    </select>
                    <p></p>
                    <select ref={selectOutput} name="outputSelect" id="outputSelect" className={`text-black bg-white m-auto mb-6 p-1`}>
                        <option value="" className={`hidden`}>Select the output</option>
                        <option value="0">Decimal</option>
                        <option value="1">Hexadecimal</option>
                        <option value="2">Binary</option>
                    </select>
                <input type="text" ref={input} className={`text-black border border-black rounded-lg`}/>
                <button className={`bg-[#28a745] text-white rounded-lg w-fit m-auto p-3`}>Calculate</button>
                <input type="text" ref={output} className={`text-black border border-black rounded-lg`}/>
            </form>
        </div>
    )
}