import { pipe } from './pipe';

interface IUnionStringsConfig {
  funcs?: ((text: string) => string)[];
  separator?: string;
}

// #region limitStringLength
/**
 * Limits the length of a string to a specified number of characters, appending "..." if truncated.
 *
 * @param {string} text - The input string to be truncated.
 * @param {number} [limit=32] - The maximum length of the output string, including the "..." suffix if truncated.
 * @returns {string} - The truncated string with "..." appended if it exceeds the limit.
 *
 * @example
 * limitStringLength('This is a long text', 10);
 * // returns 'This is a...'
 *
 * @example
 * limitStringLength('Short', 10);
 * // returns 'Short'
 */
function limitStringLength(text: string, limit: number = 32): string {
  if (!text) return '';
  return text.length > limit ? text.slice(0, limit) + '...' : text;
}
// #endregion

// #region pascalCaseToWords
/**
 * Converts a PascalCase string to words separated by spaces.
 *
 * @param {string} text - The PascalCase string to be converted.
 * @returns {string} - The converted string with spaces between words.
 *
 * @example
 * pascalCaseToWords('PascalCaseString');
 * // returns 'Pascal Case String'
 *
 * @example
 * pascalCaseToWords('AnotherExampleHere');
 * // returns 'Another Example Here'
 */
function pascalCaseToWords(text: string): string {
  return text
    .replace(/([A-Z])/g, ' $1')
    .replace(/(^.|[^a-zA-Z0-9]+.)/g, (str) => str.toUpperCase())
    .trim();
}
// #endregion

// #region removeSpecialCharacters
/**
 * Removes all special characters from a string, leaving only alphanumeric characters.
 *
 * @param {string} text - The input string from which special characters are to be removed.
 * @returns {string} - The cleaned string with only alphanumeric characters.
 *
 * @example
 * removeSpecialCharacters('Hello@World!');
 * // returns 'HelloWorld'
 *
 * @example
 * removeSpecialCharacters('123-456*789');
 * // returns '123456789'
 */
function removeSpecialCharacters(text: string): string {
  return text.replace(/[^a-zA-Z0-9]/g, '');
}
// #endregion

// #region unionStrings
/**
 * Concatenates two strings with optional transformations and a separator.
 *
 * @param {string} stringOne - The first string to be concatenated.
 * @param {string} stringTwo - The second string to be concatenated.
 * @param {IUnionStringsConfig} [config] - Configuration options for transformations and separator.
 * @returns {string} - The concatenated string after applying transformations and separator.
 *
 * @example
 * unionStrings('Hello', 'World');
 * // returns 'HelloWorld'
 *
 * @example
 * unionStrings('Hello', 'World', { separator: ' ' });
 * // returns 'Hello World'
 */
function unionStrings(
  stringOne: string,
  stringTwo: string,
  config?: IUnionStringsConfig,
): string {
  return [stringOne, stringTwo]
    .map((str) => pipe(...(config?.funcs || []))(str || ''))
    .join(config?.separator || '');
}
// #endregion

// #region camelCaseToNormal
/**
 * Converts a camelCase string to a normal sentence case string.
 *
 * @param {string} text - The camelCase string to be converted.
 * @returns {string} - The converted string in normal sentence case.
 *
 * @example
 * camelCaseToNormal('camelCaseToNormal');
 * // returns 'Camel case to normal'
 *
 * @example
 * camelCaseToNormal('thisIsATest');
 * // returns 'This is a test'
 */
function camelCaseToNormal(text: string): string {
  let result = text.replace(/([A-Z])/g, ' $1');
  result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  return result;
}
// #endregion

// #region maskString
/** Masks the middle portion of a string with a specified character, based on the given percentage ranges.
 *
 * @param {string} str - The input string to be masked.
 * @param {number} [startPercentage=30] - The percentage of the string's length at which the masking starts.
 * @param {number} [endPercentage=70] - The percentage of the string's length at which the masking ends.
 * @param {string} [maskChar='*'] - The character used to mask the middle portion of the string. Defaults to '*'.
 * @returns {string} - The masked string with the middle portion replaced by the specified character.
 *
 * @example
 * maskMiddle('HelloWorld', 30, 70);
 * // returns 'Hel***ld'
 *
 * @example
 * maskMiddle('Test', 25, 75);
 * // returns 'Te*t'
 *
 * @example
 * maskMiddle('HelloWorld', 30, 70, '#');
 * // returns 'He###ld'
 *
 * @example
 * maskMiddle('****', 25, 75);
 * // returns '****'
 */
const maskString = (
  str: string,
  startPercentage: number = 30,
  endPercentage: number = 70,
  maskChar: string = '*',
): string => {
  if (str.length <= 4) return str;

  const start = Math.floor((str.length * startPercentage) / 100);
  const end = Math.ceil((str.length * endPercentage) / 100);

  const startStr = str.substring(0, start);
  const endStr = str.substring(end, str.length);
  const middleStr = str.substring(start, end).replace(/./g, maskChar);

  return startStr + middleStr + endStr;
};
// #endregion

// #region normalizeString
/**
 * Normalizes a string by removing diacritical marks and converting the text
 * to Title Case (each word starts with an uppercase letter followed by lowercase letters).
 *
 * @param str - The string to be normalized.
 * @returns The normalized string with diacritical marks removed and each word in Title Case.
 */
function normalizeString(str: string): string {
  return str
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
// #endregion

export const StringUtils = {
  limitStringLength,
  pascalCaseToWords,
  removeSpecialCharacters,
  unionStrings,
  camelCaseToNormal,
  maskString,
  normalizeString,
};
