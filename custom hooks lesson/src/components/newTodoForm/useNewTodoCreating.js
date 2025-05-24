import { useState } from "react";

export function useNewTodoCreating(title, completed) {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSuccessMessage("");
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title,
                    completed,
                }),
            });
            const data = await response.json();
            setSuccessMessage(`Todo with id ${data.id} created`);
        } catch (error) {
            console.error("Error creating todo:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return {
        handleSubmit,
        isLoading,
        successMessage,
    };
}