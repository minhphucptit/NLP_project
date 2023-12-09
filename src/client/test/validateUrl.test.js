import { validateUrl } from '../js/validateUrl'

test('check validate url', () => {
  expect(validateUrl('https://www.google.com')).toBe(true);
  expect(validateUrl('abcxyz')).toBe(false);
});