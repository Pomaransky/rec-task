type FieldMeta = {
  isTouched: boolean;
  errors: ({ message: string } | undefined)[];
};

export function fieldError({ isTouched, errors }: FieldMeta) {
  return isTouched ? errors.find(Boolean)?.message : undefined;
}
