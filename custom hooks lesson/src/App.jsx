import { TodosList } from "./components/TodosList";
import { NewTodoForm } from "./components/newTodoForm/newTodoForm.jsx";
import "./App.css"

function App() {
    return (
        <div>
            <h1>My Custom Hooks App</h1>
            <TodosList />
            <h1>Last Exercise</h1>
            <NewTodoForm />
        </div>
    )
}
export default App