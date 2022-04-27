import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addClassroom: (parent, { addClassroomInput }, { db, pubsub }, info) => {
        const newClassroom = {id: uuidv4(),...addClassroomInput};
        db.classroom.push(newClassroom);
        pubsub.publish('newClassroom', {newClassroom})
        return newClassroom;
    }
}
