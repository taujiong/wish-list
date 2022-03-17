import { calculateDate } from '../../src/services/moment';

describe('calculateDate', () => {
  it('should be correct when skip years', () => {
    expect.assertions(1);
    const endOf2021 = new Date('2021-12-31T08:02:18.600Z');
    const startOf2022 = new Date('2022-01-01T08:02:18.600Z');
    const result = calculateDate(endOf2021, startOf2022);

    expect(result).toBe('昨天 16:02');
  });
});
