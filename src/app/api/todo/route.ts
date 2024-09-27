import { PrismaClient, Todos } from '@prisma/client'

const prisma = new PrismaClient();

export const GET = async () => {
  const todos: Todos[] = await prisma.todos.findMany()
  return Response.json(todos)  
}