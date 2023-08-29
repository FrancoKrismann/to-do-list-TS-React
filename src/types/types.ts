import { FILTER_BUTTONS, TODO_FILTERS } from "../consts"
import { Todo ,FilterButton} from "../interface/interface"

export type TodoId = Pick<Todo, `id`>
export type TodoTitle = Pick<Todo, `title`>
export type TodoCompleted = Pick<Todo, `completed`>
export type TodoSuccess = Pick<Todo, `id` | `completed`>


export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]



export type FilterButtons = {
    [key in keyof typeof FILTER_BUTTONS]: FilterButton;
};