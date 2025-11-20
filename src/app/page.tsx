import { auth } from "@clerk/nextjs/server";
import { getTodoListactions } from "../../actions/todo.actions";
import ADD from "@/components/ADD";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);
  const todos = await getTodoListactions({
    userId,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ADD userId={userId} />
      <TodoTable todo={todos} />
    </main>
  );
}
