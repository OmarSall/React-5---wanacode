import  { useTodosLoading } from "./useTodosLoading";

export const TodosList = () => {
    const {todos, isLoading } = useTodosLoading();

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map(({ id, title, completed }) => (
                    <li key={id}>
                        {title}  {completed ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
        </div>
    )
}