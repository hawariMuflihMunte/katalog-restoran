/* eslint-disable no-undef */

describe('A Sample Test for Sum', () => {
  const sum = (a, b) => a + b

  it('should return a + b value', () => {
    expect(sum(2, 3))
      .toEqual(5)
  })
})
