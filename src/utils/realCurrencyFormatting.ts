export function realCurrencyFormatting(price: number) {
  return price.toLocaleString('pt-br', {minimumFractionDigits: 2});
}