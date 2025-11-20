"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient()
export const getTodoListactions=async ({userId}:{userId:string|null})=>{
const todo=  await prisma.todo.findMany({

    orderBy:{
        createdAt:"desc"
    },

    where:{
userId :userId as string
}
})
    return todo
    
}
 
export const PostTodoListactions=async ({title,body ,completed ,userId}:{title:string , body:string ,completed:boolean,userId:string|null})=>{
      console.log("DATA RECEIVED:", { title, body, completed,  });

    await prisma.todo.create({
        data:{
            body,
            title,
            completed,
userId :userId as string
        },
    },
)
    revalidatePath("/")
    
}

export const UbdateTodoListactions=async ({id,  title,body ,completed}:{ id:string ,title:string , body:string ,completed:boolean})=>{
    await prisma.todo.update({
        where:{
            id 
        },
        data:{
            body,
            completed,
             title
        }
    })
    
    revalidatePath("/")
}


export const DeletTodoListactions=async ({id}:{id:string})=>{
    await prisma.todo.delete({
        where :{
            id
        },
    })
    revalidatePath("/")
}