/* eslint-disable max-lines-per-function */
import ERROR_MESSAGE from '../../src/constants/error-messages.js';
import { LOTTO_PRICE } from '../../src/constants/lotto-constants.js';
import purchaseAmountValidator from '../../src/validator/purchaseAmountValidator.js';

describe('Purchase validate 테스트', () => {
  test('구입 금액 입력값이 숫자가 아니면 오류를 던진다.', () => {
    const NO_NUMBER_PURCHASE_AMOUNT = '1000원';

    expect(() => purchaseAmountValidator.validate(NO_NUMBER_PURCHASE_AMOUNT)).toThrow(
      ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_TYPE,
    );
  });

  test(`구입 금액이 ${LOTTO_PRICE}원 이상이 아니면 오류를 던진다.`, () => {
    const LESS_THAN_MIN_PURCHASE_AMOUNT = LOTTO_PRICE - 1;

    expect(() => purchaseAmountValidator.validate(LESS_THAN_MIN_PURCHASE_AMOUNT)).toThrow(
      ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_RANGE,
    );
  });

  test(`구입 금액이 ${LOTTO_PRICE}원 단위가 아니면 오류를 던진다.`, () => {
    const CANT_DIVIDED_PURCHASE_AMOUNT = LOTTO_PRICE + 100;

    expect(() => purchaseAmountValidator.validate(CANT_DIVIDED_PURCHASE_AMOUNT)).toThrow(
      ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_DIVIDED,
    );
  });
});
