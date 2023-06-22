const isIsogram = require('./isograms');

describe('isIsogram', () => {
  it('should return true when given empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  it('should return false when given no string', () => {
    expect(isIsogram(true)).toBe(false);
  });
});
