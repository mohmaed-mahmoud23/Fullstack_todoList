import z from "zod";

export  const profileFormSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "title must be at least 2 characters.",
      })
      .max(30, {
        message: "Username must not be longer than 30 characters.",
      }),

    bio: z.string().max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
    chack:z.boolean()
  });
 export type ProfileFormValues = z.infer<typeof profileFormSchema>;