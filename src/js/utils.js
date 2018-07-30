const numeral = require('numeral')

let currencySymbols = {
  'GBP': '£'
}
export const formatMoney = (amount, currency) => {
  return `${currencySymbols[currency]} ${numeral(amount / 100).format('0,0.00')}`
}
