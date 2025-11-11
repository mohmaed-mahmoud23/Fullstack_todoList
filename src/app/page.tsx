import ADD from "@/components/ADD";
import TodoTable from "@/components/TodoTable";
import { getTodoListactions } from "../../actions/todo.actions";

export default async function Home() {
  const todos = await getTodoListactions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <ADD />
      <TodoTable todo={todos} />
    </main>
  );
}
