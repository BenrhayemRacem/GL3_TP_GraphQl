import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addClassroom: (parent, { addClassroomInput }, { db, pubsub }, info) => {
        const newClassroom = {id: uuidv4(),...addClassroomInput};
        db.classroom.push(newClassroom);
        pubsub.publish('newClassroom', {newClassroom})
        return newClassroom;
    },

    addTodo :(parent , {addTodoInput} , {db,pubsub}) =>{

        const userExists = db.users.find((user)=>user.id==addTodoInput.userID) ;

        if(userExists) {
            const newTodo = {id:uuidv4() ,status :"wait" , ...addTodoInput}
            db.todos.push(newTodo)
            pubsub.publish('todoMutation' , {todoMutation:{type:"add",data:newTodo}})
            return newTodo
        }
        throw new Error("User Not Found")
    },

    updateTodo : (parent , {updateTodoInput} , {db,pubsub})=>{
        let todoExists = db.todos.find((todo)=>todo.id == updateTodoInput.id);
        console.log(todoExists)
        if(todoExists) {
            const index = db.todos.findIndex((todo)=>todo.id == updateTodoInput.id);
            console.log(index)
            todoExists = {...todoExists , ...updateTodoInput} ;
            db.todos.splice(index,1,todoExists);
            pubsub.publish('todoMutation' , {todoMutation:{type:"update",data:todoExists}})
            return todoExists
        }
        throw new Error("Todo Not Found")
    },

    deleteTodo : (parent,{deleteTodoInput} , {db,pubsub})=>{
        let todoExists = db.todos.find((todo)=>todo.id == deleteTodoInput.id);

        if(todoExists) {
            const index = db.todos.findIndex((todo)=>todo.id == deleteTodoInput.id);
            db.todos.splice(1,index)
            pubsub.publish('todoMutation' , {todoMutation:{type:"delete",data:todoExists}})
            return todoExists
        }
        throw new Error("Todo Not Found")
    }
}
