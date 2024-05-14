"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { FormButton } from "@/components/common/form-button";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formstate, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
          </div>

          <Input
            isInvalid={!!formstate.errors.title}
            errorMessage={formstate.errors.title?.join(", ")}
            name="title"
            label="Title"
            labelPlacement="outside"
            placeholder="title"
          />
          <Textarea
            isInvalid={!!formstate.errors.content}
            errorMessage={formstate.errors.content?.join(", ")}
            name="content"
            label="Content"
            labelPlacement="outside"
            placeholder="Content"
          />
          {formstate.errors._form ? (
            <div className="rounded p-2 bg-red-200 border border-red-400">
              {formstate.errors._form.join(", ")}
            </div>
          ) : null}
          <FormButton>Create Post</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
}
