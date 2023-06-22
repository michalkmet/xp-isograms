const isIsogram = require('./isograms');

describe('isIsogram', () => {
  it('should return true when given empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
});
