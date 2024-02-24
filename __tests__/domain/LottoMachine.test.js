/* eslint-disable max-lines-per-function */
import lottoMachine from '../../src/domain/lottoMachine.js';

describe('LottoMachine 객체 테스트', () => {
  describe('구입금액만큼 로또 인스턴스를 만들어낸다.', () => {
    test.each([
      { purcaseAmount: 1_000, expectedLottoCount: 1 },
      { purcaseAmount: 2_000, expectedLottoCount: 2 },
      { purcaseAmount: 3_000, expectedLottoCount: 3 },
      { purcaseAmount: 4_000, expectedLottoCount: 4 },
    ])(
      '$purcaseAmount원치 구매시 로또 인스턴스는 $expectedLottoCount개 생성한다.',
      ({ purcaseAmount, expectedLottoCount }) => {
        expect(lottoMachine.makeLottos(purcaseAmount).length).toBe(expectedLottoCount);
      },
    );
  });
});
