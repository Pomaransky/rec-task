type FieldMeta = {
  isBlurred: boolean;
  errors: ({ message: string } | undefined)[];
};

export function fieldError({ isBlurred, errors }: FieldMeta) {
  return isBlurred ? errors.find(Boolean)?.message : undefined;
}
