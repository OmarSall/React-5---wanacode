import { useState } from "react";

export function useNewTodoForm() {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleCompletedChange = (event) => {
        setCompleted(event.target.checked);
    }

    return {
        title,
        completed,
        handleTitleChange,
        handleCompletedChange,
    }
}