const numeral = require('numeral')

let currencySymbols = {
  'GBP': '£'
}
export const formatMoney = (amount, currency) => {
  let currencySymbol = currencySymbols.hasOwnProperty(currency) ? currencySymbols[currency] : currency
  return `${currencySymbol} ${numeral(amount / 100).format('0,0.00')}`
}
