export const Subscription = {
    newClassroom: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('newClassroom');
        }
    },
    todoMutation : {
        subscribe(parent, args, {pubsub}, info) {
            return pubsub.asyncIterator("todoMutation");
        }
    }
}
