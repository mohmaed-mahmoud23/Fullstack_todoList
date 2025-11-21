import { getTodoListactions } from "../../actions/todo.actions";
import ADD from "../components/ADD";
import TodoTable from "../components/TodoTable";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const userId = null;

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
