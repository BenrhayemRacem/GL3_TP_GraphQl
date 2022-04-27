
export const User = {
    todos: ( user,args,{db} ) => {
        return db.todos.find(
            (todo) => todo.user == user.id
        );
    }
}