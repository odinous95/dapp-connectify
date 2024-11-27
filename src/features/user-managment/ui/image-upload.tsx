import React, { useState } from "react";
import { useActionState } from "react";

export function ImageInput() {
  const [state, formAction, isPending] = useActionState(
    uploadImageAction,
    null
  );
  return (
    <form action={formAction}>
      <input id="email" name="email" type="file" accept="image/*" />
      {state?.errors?.email && (
        <strong className="mt-1 text-sm text-red-600">
          {state.errors.email}
        </strong>
      )}
    </form>
  );
}
