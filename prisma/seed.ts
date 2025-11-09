import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here


await prisma.todo.create({
  data:{
    
    title:"sssdssd",
    body:"asssssdmsm",


    
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
// })
  
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })