import { Todo } from "../interface/interface"
import { useState } from "react"


export const UseLocalStorage = <T extends Object>()  => {
     
    const [data, setData] = useState<Todo>()
    const getData:Todo = localStorage.getItem("")

    if(getData) {
        const Data:Todo = JSON.parse(getData)
        setData(Data)
    }

    return {
        data
    }
}