export const formatCurrency = (
  amount: number,
  options: {
    maximumSignificantDigits?: number;
    currency: string;
  },
  locale: string | string[] = [],
) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    ...options,
  }).format(amount);
