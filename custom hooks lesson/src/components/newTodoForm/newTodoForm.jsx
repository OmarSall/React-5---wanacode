import { useNewTodoForm } from "./useNewTodoForm.js";
import { useNewTodoCreating } from "./useNewTodoCreating.js";

export const NewTodoForm = () => {
    const { title, completed, handleTitleChange, handleCompletedChange } = useNewTodoForm();
    const { handleSubmit, isLoading, successMessage } = useNewTodoCreating(title, completed);

    return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Todo title"
          />
          <label>
              <input
                  type="checkbox"
                  name="completed"
                  checked={completed}
                  onChange={handleCompletedChange}
              />
              Completed
          </label>
          <button type="submit" disabled={isLoading}>Submit</button>
          {successMessage && <p>{successMessage}</p>}
      </form>
    );
}