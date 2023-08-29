import { type FilterValue } from "../types/types";
import { Filters } from "./Filters"

interface Props {
    activeCount: number;
    completedCount:number;
    filterSelected: FilterValue
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer:React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
    </span>
       
    <Filters
    filterSelected={filterSelected}
    onFilterChange={handleFilterChange}
    />
    {
        completedCount > 0 && (
            <button
            className="clear-completed"
            onClick={onClearCompleted}
            >
                Borrar completados
            </button>
        )
    }
</footer>
)

}