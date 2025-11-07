"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getTodoListactions=async ()=>{
const todo=  await prisma.todo.findMany()
    return todo
}

export const UbdateTodoListactions=async ()=>{
    
}

export const PostTodoListactions=async ()=>{
    
}


export const DeletTodoListactions=async ()=>{
    
}