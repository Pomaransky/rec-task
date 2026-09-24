import { fieldError } from "../fied-error";
import { CheckboxField } from "../fields/checkbox-field";
import { InputField } from "../fields/input-field";
import { SwitchField } from "../fields/switch-field";
import type { ProductFormApi } from "../use-product-form";
import { INTEGER_INPUT_PATTERN } from "../utils";

export function AvailabilityStep({ form }: { form: ProductFormApi }) {
  return (
    <>
      <form.Field name="isAvailable">
        {(field) => (
          <SwitchField
            id={field.name}
            label="Produkt jest dostępny"
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
          />
        )}
      </form.Field>
      <form.Field name="isLimited">
        {(field) => (
          <CheckboxField
            id={field.name}
            label="Produkt limitowany"
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
          />
        )}
      </form.Field>
      <form.Subscribe selector={(state) => state.values.isLimited}>
        {(isLimited) =>
          isLimited && (
            <form.Field name="stockQuantity">
              {(field) => (
                <InputField
                  id={field.name}
                  label="Ilość na magazynie"
                  inputMode="numeric"
                  allowedPattern={INTEGER_INPUT_PATTERN}
                  value={field.state.value}
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                  error={fieldError(field.state.meta)}
                />
              )}
            </form.Field>
          )
        }
      </form.Subscribe>
      <div className="flex flex-col gap-4 sm:flex-row">
        <form.Field name="minCartQuantity">
          {(field) => (
            <InputField
              id={field.name}
              label="Min. ilość na koszyk"
              inputMode="numeric"
              allowedPattern={INTEGER_INPUT_PATTERN}
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
        <form.Field name="maxCartQuantity">
          {(field) => (
            <InputField
              id={field.name}
              label="Maks. ilość na koszyk"
              inputMode="numeric"
              allowedPattern={INTEGER_INPUT_PATTERN}
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
      </div>
    </>
  );
}
