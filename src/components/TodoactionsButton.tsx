"use client";
import { Button } from "./ui/button";
import { Pen, TrashIcon } from "lucide-react";
import { DeletTodoListactions } from "../../actions/todo.actions";
import Spiner from "./ui/Spiner";
import { useState } from "react";

const TodoactionsButton = ({ id }: { id: string }) => {
  const [Loding, Setloding] = useState(false);

  return (
    <>
      <Button>
        <Pen size={16} />
      </Button>
      <Button
        onClick={async () => {
          {
            Setloding(true);
            await DeletTodoListactions({ id });

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

export default TodoactionsButton;
