"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient()

export const getTodoListactions=async ()=>{
const todo=  await prisma.todo.findMany({
    orderBy:{
        createdAt:"desc"
    }
})
    return todo
}

export const PostTodoListactions=async ({title,body ,completed}:{title:string , body:string ,completed:boolean})=>{
     await prisma.todo.create({
        data:{
            body,
            title,
            completed
            
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