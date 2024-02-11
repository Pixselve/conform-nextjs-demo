import { z } from "zod";

export const demoFormSchema = z.object({
	firstName: z
		.string({
			required_error: "First name is required",
		})
		.min(2, "First name must be at least 2 characters long"),
	lastName: z
		.string({
			required_error: "Last name is required",
		})
		.min(2, "Last name must be at least 2 characters long"),
});
