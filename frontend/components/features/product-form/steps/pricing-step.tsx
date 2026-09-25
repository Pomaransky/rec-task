import { CURRENCIES, VAT_RATES } from "../constants";
import { fieldError } from "../fied-error";
import { InputField } from "../fields/input-field";
import { SelectField } from "../fields/select-field";
import type { ProductFormApi } from "../use-product-form";
import { AMOUNT_INPUT_PATTERN, grossFromNet, netFromGross, parseAmount } from "../utils";

export function PricingStep({ form }: { form: ProductFormApi }) {
  const setDerived = (name: "netPrice" | "grossPrice", value: string) =>
    form.setFieldValue(name, value, { dontUpdateMeta: true });

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row">
        <form.Field name="netPrice">
          {(field) => (
            <InputField
              id={field.name}
              label="Cena netto"
              placeholder="0.00"
              inputMode="decimal"
              allowedPattern={AMOUNT_INPUT_PATTERN}
              value={field.state.value}
              onChange={(value) => {
                setDerived("grossPrice", grossFromNet(value, form.getFieldValue("vatRate")));
                field.handleChange(value);
              }}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
        <form.Field name="grossPrice">
          {(field) => (
            <InputField
              id={field.name}
              label="Cena brutto"
              placeholder="0.00"
              inputMode="decimal"
              allowedPattern={AMOUNT_INPUT_PATTERN}
              value={field.state.value}
              onChange={(value) => {
                setDerived("netPrice", netFromGross(value, form.getFieldValue("vatRate")));
                field.handleChange(value);
              }}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <form.Field name="vatRate">
          {(field) => (
            <SelectField
              id={field.name}
              label="VAT"
              options={VAT_RATES}
              value={field.state.value}
              onChange={(vatRate) => {
                const net = form.getFieldValue("netPrice");
                if (parseAmount(net) !== null) {
                  setDerived("grossPrice", grossFromNet(net, vatRate));
                } else {
                  setDerived("netPrice", netFromGross(form.getFieldValue("grossPrice"), vatRate));
                }
                field.handleChange(vatRate);
              }}
              onBlur={field.handleBlur}
              error={fieldError(field.state.meta)}
            />
          )}
        </form.Field>
        <form.Field name="currency">
          {(field) => (
            <SelectField
              id={field.name}
              label="Waluta"
              options={CURRENCIES}
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
