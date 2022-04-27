import {db} from "../data/db.js";

export const Student = {
    classroom: ( student,args,{db} ) => {
        return db.classroom.find(
            (classroom) => classroom.id == student.classroom
        );
    }
}
