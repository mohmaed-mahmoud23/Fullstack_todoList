"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { profileFormSchema, ProfileFormValues } from "../../schema";
import { PostTodoListactions } from "../../actions/todo.actions";
import { check } from "zod";
const ADD = () => {
  const defaultValues: Partial<ProfileFormValues> = {
    bio: "",
    title: "",
    chack: false,
  };
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = async (data: ProfileFormValues) => {
    await PostTodoListactions({
      body: data.bio,
      title: data.title,
      completed: data.chack,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          AD TODOD
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-black">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4  ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chack"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="chack"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel htmlFor="chack">completed</FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-x-2">
                <Button variant="default" className=" dark:bg-black">
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ADD;
