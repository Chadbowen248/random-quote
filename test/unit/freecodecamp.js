import freeCodeCamp from '../../src/RandomQuoteGen';

describe('freeCodeCamp', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(freeCodeCamp, 'greet');
      freeCodeCamp.greet();
    });

    it('should have been run once', () => {
      expect(freeCodeCamp.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(freeCodeCamp.greet).to.have.always.returned('hello');
    });
  });
});
