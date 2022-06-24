export const sum = (values: any[]) =>
  values.reduce(
    (previousValue, currentValue) => (previousValue + currentValue) * 1000,
  );
