import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Iprop } from "../../interfaces";
import TodoActionsButton from "./TodoActionsButton";

export default function TodoTable({ todo }: { todo: Iprop[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id </TableHead>
          <TableHead>title</TableHead>
          <TableHead>completed</TableHead>
          <TableHead>createdAt</TableHead>

          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todo?.map((todos) => (
          <TableRow key={todos?.id}>
            <TableCell className="font-medium">{todos?.id}</TableCell>
            <TableCell>{todos?.title}</TableCell>
            <TableCell>
              {todos?.completed ? "✅ Done" : "❌ Not Done"}
            </TableCell>
            <TableCell>
              {todos.createdAt.toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </TableCell>
            <TableCell className="flex items-center  space-x-2">
              <TodoActionsButton todo={todos} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className=" w-full">
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">${todo.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
