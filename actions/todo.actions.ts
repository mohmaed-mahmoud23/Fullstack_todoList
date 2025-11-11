"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getTodoListactions=async ()=>{
const todo=  await prisma.todo.findMany()
    return todo
}

export const PostTodoListactions=async ({title,body ,completed}:{title:string , body:string ,completed:boolean})=>{
    return await prisma.todo.create({
        data:{
            body,
            title,
            completed
            
        }
    })
    
}

export const UbdateTodoListactions=async ()=>{

    
}


export const DeletTodoListactions=async ({id}:{id:string})=>{
    await prisma.todo.delete({
        where :{
            id
        }
    })
    
}