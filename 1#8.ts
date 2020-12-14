import axios from 'axios';

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface DetailsInterface{
    userId:number;
    id:number;
    title:string;
    finished:boolean;
}

const responseDataPrint = (userId:number,id:number,title:string,finished:boolean) =>{
    console.log(`
        User Id is: ${userId}
        Id no is: ${id}
        Title is ${title}
        Finished is ${finished}
    `);
}

axios.get(url)
    .then(response => {
        const data = response.data as DetailsInterface;
        responseDataPrint(data.userId,data.id,data.title,data.finished);

    })
    .catch(err => console.log(err.response));


