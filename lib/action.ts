"use server";
import { parseWithZod } from "@conform-to/zod";
import { demoFormSchema } from "@/lib/schema";

export async function demoForm(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: demoFormSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  console.log(submission.value);
}
