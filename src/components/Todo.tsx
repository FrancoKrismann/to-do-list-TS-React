import {type TodoSuccess, type TodoId  } from "../types/types"
import {type Todo as TodoType} from "../interface/interface"
import { useCallback } from "react";

interface Props extends TodoType {
    onRemoveTodo: ({ id }:TodoId) => void;
    onToggleCompleteTodo : ({ id, completed }:TodoSuccess) => void;
}

export  const Todo:React.FC<Props> = ({id,title,completed, onRemoveTodo, onToggleCompleteTodo}) => {
    
    const handleChangeCheckbox = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    },[id, onToggleCompleteTodo])

    console.log("title",title);
    
    return (
        <div>
            <input
            className="toggle"
            checked={completed}
            type="checkbox"
            onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
            className="destroy"
            onClick={() => {
                onRemoveTodo({ id })
            }}
            />
        </div>
    )
}