"use server";
import { demoFormSchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";

export async function demoForm(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, {
		schema: demoFormSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	console.log(submission.value);
}
