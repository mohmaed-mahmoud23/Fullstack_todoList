import ADD from "@/components/ADD";
import TodoTable from "@/components/TodoTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <ADD />
      <TodoTable/>
    </main>
  );
}
