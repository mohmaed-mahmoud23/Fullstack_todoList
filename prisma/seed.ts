import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

await prisma.todo.create({
  data:{
   
            body :"aas",
            title :"sdsd",
          userId:"سي"

            
            
  }
})
// await prisma.user.create({
//     data:{
//         email :"mohششششande@mo.com",
//         name:"adشed",
//        address:{
//        city:" KDشNN",
//        state :"SDشSD0",
//        street:"SDSN",
//        zip:"SشD",
       
//        }
        
//     }
// 
}