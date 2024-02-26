import formatNumber from '../utils/formatNumber.js';

import { LOTTO_NUMBER_LENGTH, LOTTO_NUMBER_RANGE, LOTTO_PRICE } from './lotto-constants.js';

const ERROR_MESSAGE = {
  INVALID_PURCHASE_AMOUNT_TYPE: '구입 금액은 숫자로 입력해주세요.',
  INVALID_PURCHASE_AMOUNT_RANGE: `구입 금액은 ${formatNumber(LOTTO_PRICE)}원 이상의 값을 입력해주세요`,
  INVALID_PURCHASE_AMOUNT_DIVIDED: `구입 금액은 ${formatNumber(LOTTO_PRICE)}원 단위로 입력해주세요.`,

  INVALID_LOTTO_NUMBER_LENGTH: `로또 번호로 ${LOTTO_NUMBER_LENGTH}개를 입력해주세요.`,
  INVALID_LOTTO_NUMBER_DUPLICATE: '로또 번호에 중복된 숫자가 있습니다.',
  INVALID_LOTTO_NUMBER_RANGE: `로또 번호로 ${LOTTO_NUMBER_RANGE.MIN} ~ ${LOTTO_NUMBER_RANGE.MAX} 사이의 숫자를 입력해주세요.`,
  INVALID_LOTTO_NUMBER_TYPE: '로또 번호는 숫자로만 입력해주세요.',

  INVALID_BONUS_NUMBER_DUPLICATE: '보너스 번호는 당첨 로또 번호와 중복되면 안됩니다.',
  INVALID_BONUS_NUMBER_RANGE: `보너스 번호로 ${LOTTO_NUMBER_RANGE.MIN} ~ ${LOTTO_NUMBER_RANGE.MAX} 사이의 숫자를 입력해주세요.`,
  INVALID_BONUS_NUMBER_TYPE: '보너스 번호는 숫자로만 입력해주세요.',

  OVER_RETRY_LIMIT: '재시도 횟수를 초과했습니다.',

  EMPTY_INPUT: '아무것도 입력하지 않으셨습니다.',
  SPACE_IN_INPUT: '입력하신 값에 공백이 포함되어있습니다.',
  INCLUDES_EMPTY_INPUT: '입력한 값 중 공백이 있습니다.',
};

export default ERROR_MESSAGE;
