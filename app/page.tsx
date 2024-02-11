"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { demoForm } from "@/lib/action";
import { getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { demoFormSchema } from "@/lib/schema";

export default function Home() {
  const [lastResult, action] = useFormState(demoForm, undefined);
  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(demoFormSchema),
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: demoFormSchema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="max-w-2xl m-auto mt-10 space-y-4"
    >
      <h1 className="text-2xl font-bold">Conform NextJS Demo</h1>
      <div className="space-y-4">
        <div className="grid grid-cols-2 items-center">
          <div className="space-y-1">
            <Label htmlFor="first-name">First name</Label>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your first name
            </p>
          </div>
          <div className="space-y-1">
            <Input
              {...getInputProps(fields.firstName, {
                type: "text",
                ariaDescribedBy: fields.firstName.descriptionId,
              })}
              id="first-name"
              placeholder="First name"
            />
            <p className="text-red-500">{fields.firstName.errors}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="space-y-1">
            <Label htmlFor="last-name">Last name</Label>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your last name
            </p>
          </div>
          <div className="space-y-1">
            <Input
              {...getInputProps(fields.lastName, {
                type: "text",
                ariaDescribedBy: fields.lastName.descriptionId,
              })}
              id="last-name"
              placeholder="Last name"
            />
            <p className="text-red-500">{fields.lastName.errors}</p>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}
