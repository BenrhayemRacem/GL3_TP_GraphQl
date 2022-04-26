import {db} from "../data/db.js";

export const User = {
    todos: ( user ) => {
        return db.todos.find(
            (todo) => todo.user == user.id
        );
    }
}