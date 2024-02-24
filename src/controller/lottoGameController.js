import { LOTTO_PRICE } from '../constants/lotto-constants.js';
import RETRY_INPUT from '../constants/system.js';
import LottoResultCalculator from '../domain/LottoResultCalculator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import LottoPurchaseController from './lottoPurchaseController.js';
import WinningLottoGenerator from './winningLottoGenerator.js';

class LottoGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async play() {
    const lottoList = await this.#getPurchasedLottoTickets();
    const { winningLottoNumbers, bonusNumber } = await this.#createValidatedWinningLotto();

    this.#getGameResult({ lottoList, winningLottoNumbers, bonusNumber });

    this.#restart();
  }

  async #restart() {
    const retryAnswer = await this.#inputView.readRestartGame();

    if (RETRY_INPUT.YES.includes(retryAnswer.trim())) this.play();
  }

  async #createValidatedWinningLotto() {
    const winningLottoGenerator = WinningLottoGenerator();
    const { winningLottoNumbers, bonusNumber } = await winningLottoGenerator.createWinningLotto();

    return { winningLottoNumbers, bonusNumber };
  }

  async #getPurchasedLottoTickets() {
    const lottoPurchaseController = new LottoPurchaseController();
    const lottoTickets = await lottoPurchaseController.processPurchaseLotto();

    return lottoTickets;
  }

  #getGameResult({ lottoList, winningLottoNumbers, bonusNumber }) {
    const lottoResult = new LottoResultCalculator({
      lottoList,
      winningLottoNumbers,
      bonusNumber,
    });
    const totalResult = lottoResult.getTotalResult();
    const profit = lottoResult.getProfit(lottoList.length * LOTTO_PRICE);

    this.#outputView.printResult(totalResult);
    this.#outputView.printProfit(profit);
  }
}

export default LottoGameController;
