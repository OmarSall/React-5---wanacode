import { useEffect, useState } from "react";

export function useTodosLoading() {
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error("Error fetching todos:", error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchTodos().catch((error) => {
            console.error("Unhandled fetch error:", error);
        });
    }, []);

    return { todos, isLoading };
}