import { Option } from "./types";

export const MANUFACTURERS: Option[] = [
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "sony", label: "Sony" },
  { value: "xiaomi", label: "Xiaomi" }
];

export const CATEGORIES: Option[] = [
  { value: "komputery", label: "Komputery" },
  { value: "telefony", label: "Telefony" },
  { value: "rtv", label: "RTV" },
  { value: "agd", label: "AGD" },
  { value: "akcesoria", label: "Akcesoria" },
]

export const PRODUCT_CHARACTERISTICS: Option[] = [
  { value: "bluetooth", label: "Bluetooth" },
  { value: "wifi", label: "WiFi" },
  { value: "usb-c", label: "USB-C" },
  { value: "wodoodporny", label: "Wodoodporny" },
  { value: "bezprzewodowy", label: "Bezprzewodowy" },
  { value: "ekologiczny", label: "Ekologiczny" },
  { value: "premium", label: "Premium" },
];

export const FORM_STEPS = [
  { id: "basic-info", title: "Informacje", subtitle: "Dane podstawowe" },
  { id: "price", title: "Cena", subtitle: "Dane cenowe" },
  { id: "availability", title: "Dostępność", subtitle: "Stany magazynowe" },
];

export const VAT_RATES: Option[] = [
  { value: "23", label: "23%" },
  { value: "8", label: "8%" },
];

export const CURRENCIES: Option[] = [
  { value: "PLN", label: "PLN" },
  { value: "EUR", label: "EUR" },
  { value: "USD", label: "USD" },
];