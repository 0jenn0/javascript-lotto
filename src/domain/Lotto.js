import { PRIZE } from "../constants/prize-constants.js";
import lottoNumberValidator from "../validator/LottoNumberValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    lottoNumberValidator.validate(numbers);

    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winningLotto) {
    const numberMatchCount = this.#numbers.filter((number) =>
      winningLotto.getNumbers().includes(number),
    ).length;

    const isBonus = this.#numbers.includes(winningLotto.getBonusNumber());

    return { numberMatchCount, isBonus };
  }

  getRank(winningLotto) {
    const { numberMatchCount, isBonus } = this.getMatchCount(winningLotto);

    const entry = Object.entries(PRIZE).find(
      ([_, value]) =>
        value.matchCount === numberMatchCount && value.isBonus === isBonus,
    );

    const rank = entry !== undefined ? entry[0] : "NONE_PLACE";
    return rank;
  }
}
export default Lotto;
