/**
 * Format numbers based on the locale and
 * currency code provided
 *
 * @param  {Number} input    The number to be formatted
 * @param  {String} locale   A string with a BCP 47 language tag
 * @param  {String} currency ISO 4217 currency codes
 * @return {Number}
 *
 * @example
 *  	formatCurrency(100, 'pt-PT', 'EUR')
 */
export function formatCurrency(input, locale, currency) {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(input);
}
