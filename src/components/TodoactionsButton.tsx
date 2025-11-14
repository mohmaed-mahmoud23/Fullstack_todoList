"use client";
import { Button } from "./ui/button";
import { Pen, TrashIcon } from "lucide-react";
import { DeletTodoListactions } from "../../actions/todo.actions";
import Spiner from "./ui/Spiner";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { Iprop } from "../../interfaces";

const TodoActionsButton = ({ todo }: { todo: Iprop }) => {
  const [Loding, Setloding] = useState(false);

  return (
    <>
      <EditTodo todo={todo} />
      <Button
        disabled={Loding}
        onClick={async () => {
          {
            Setloding(true);
            await DeletTodoListactions({ id: todo.id });

            Setloding(false);
          }
        }}
      >
        {Loding ? (
          <Spiner />
        ) : (
          <>
            <TrashIcon size={16} color="red " />
          </>
        )}
      </Button>
    </>
  );
};

export default TodoActionsButton;
