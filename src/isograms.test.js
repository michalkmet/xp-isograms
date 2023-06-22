const isIsogram = require('./isograms');

describe('isIsogram', () => {
  it('should return true when given empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  it('should return false when given no string', () => {
    expect(isIsogram(true)).toBe(false);
  });
  it('should return false when given aba', () => {
    expect(isIsogram('aba')).toBe(false);
  });
  it('should return true when given a', () => {
    expect(isIsogram('a')).toBe(true);
  });
  it('should return false when given aa', () => {
    expect(isIsogram('aa')).toBe(false);
  });
  it('should return false when given Aab', () => {
    expect(isIsogram('Aab')).toBe(false);
  });
  it('should return true when given Dermatoglyphics', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
});
