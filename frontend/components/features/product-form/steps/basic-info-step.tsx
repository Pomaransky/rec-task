import { CATEGORIES, MANUFACTURERS, PRODUCT_CHARACTERISTICS } from "../constants";
import { fieldError } from "../fied-error";
import { InputField } from "../fields/input-field";
import { MultiSelectField } from "../fields/multi-select-field";
import { SelectField } from "../fields/select-field";
import { TextareaField } from "../fields/textarea-field";
import type { ProductFormApi } from "../use-product-form";

export function BasicInfoStep({ form }: { form: ProductFormApi }) {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row">
        <form.Field name="name">
          {(field) => (
            <InputField
              id={field.name}
              label="Nazwa produktu"
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
        <form.Field name="sku">
          {(field) => (
            <InputField
              id={field.name}
              label="SKU produktu"
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
      </div>
      <div className="flex flex-col gap-4">
        <form.Field name="description">
          {(field) => (
            <TextareaField
              id={field.name}
              label="Opis produktu"
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <form.Field name="manufacturer">
          {(field) => (
            <SelectField
              id={field.name}
              label="Producent"
              placeholder="Wybierz producenta"
              options={MANUFACTURERS}
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
        <form.Field name="category">
          {(field) => (
            <SelectField
              id={field.name}
              label="Kategoria"
              placeholder="Wybierz kategorię"
              options={CATEGORIES}
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
      </div>
      <form.Field name="productCharacteristics">
        {(field) => (
          <MultiSelectField
            id={field.name}
            label="Cechy produktu"
            options={PRODUCT_CHARACTERISTICS}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
            error={fieldError(field.state.meta)}
          />
        )}
      </form.Field>
    </>
  );
}
