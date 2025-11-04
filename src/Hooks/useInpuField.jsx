import { useState } from "react"

const useInputField=(defaultValue)=>{
    const [inputFieldValue,setInputValue]=useState(defaultValue)

    const handleOnChange=(e)=>{
        setInputValue(e.target.value)
    }
    return [inputFieldValue,handleOnChange]

}

export default useInputField