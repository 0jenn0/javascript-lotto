import ERROR_MESSAGE from '../constants/error-messages.js';
import { LOTTO_NUMBER_LENGTH, LOTTO_NUMBER_RANGE } from '../constants/lotto-constants.js';
import AppError from '../utils/appError.js';

const lottoNumberValidator = {
  validateNumbersLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new AppError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
    }
  },

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_NUMBER_LENGTH) {
      throw new AppError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_DUPLICATE);
    }
  },

  validateRange(numbers) {
    if (numbers.some((number) => number < LOTTO_NUMBER_RANGE.MIN || number > LOTTO_NUMBER_RANGE.MAX)) {
      throw new AppError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }
  },

  validateIsNumber(numbers) {
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new AppError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_TYPE);
    }
  },

  validate(numbers) {
    const formatedNumbers = numbers.map(Number);
    this.validateNumbersLength(formatedNumbers);
    this.validateDuplicate(formatedNumbers);
    this.validateRange(formatedNumbers);
    this.validateIsNumber(formatedNumbers);
  },
};

export default lottoNumberValidator;
