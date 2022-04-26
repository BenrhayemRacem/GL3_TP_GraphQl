export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todos: [
        {
            id:1,
            name:"TP GraphQl",
            content:"do tasks before wednesday",
            status:"wait",
            user:2

        },
        {
            id:2,
            name:"Champions league",
            content:"match starts at 20:00",
            status:"in_progress",
            user:1

        },
        {
            id:3,
            name:"revision cours nest",
            content:"le cours de lundi diapo 230",
            status:"done",
            user:3

        },
        {
            id:4,
            name:"fishing",
            content:"sunday morning on the beach",
            status:"canceled",
            user:2

        },
        {
            id:5,
            name:"working on PPP",
            content:"sprint retrospective 17hr",
            status:"postponed",
            user:4

        },
    ],
    users:[
        {
            id:1,
            name:"racem",
            email:"racem@outlook.com"
        },
        {
            id: 2,
            name:"benrhayem",
            email:"benrhayem@yahoo.com"
        },
        {
            id:3,
            name:"graghQl",
            email:"graghQl@gmail.com"
        },
        {
            id:4,
            name:"nestJs",
            email:"nestJs@gmail.com"
        },

    ]
}
