const { expect } = require('chai');
const { describe, it } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('NumbersValidator', () => {
  describe('isNumberEven', () => {
    it('should return true for even numbers', () => {
      expect(NumbersValidator.isNumberEven(2)).to.equal(true);
    });

    it('should return false for odd numbers', () => {
      expect(NumbersValidator.isNumberEven(3)).to.equal(false);
    });

    it('should throw an error for non-number inputs', () => {
      expect(() => NumbersValidator.isNumberEven('a')).to.throw(Error);
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return only even numbers from an array', () => {
      const input = [1, 2, 3, 4];
      const output = [2, 4];
      expect(NumbersValidator.getEvenNumbersFromArray(input)).to.eql(output);
    });

    it('should throw an error for non-array inputs', () => {
      expect(() => NumbersValidator.getEvenNumbersFromArray('a')).to.throw(Error);
    });
  });

  describe('isAllNumbers', () => {
    it('should return true for an array of numbers', () => {
      expect(NumbersValidator.isAllNumbers([1, 2, 3])).to.equal(true);
    });

    it('should return false for an array containing non-numbers', () => {
      expect(NumbersValidator.isAllNumbers([1, 'a', 3])).to.equal(false);
    });

    it('should throw an error for non-array inputs', () => {
      expect(() => NumbersValidator.isAllNumbers('a')).to.throw(Error);
    });
  });

  describe('isInteger', () => {
    it('should return true for integer numbers', () => {
      expect(NumbersValidator.isInteger(2)).to.equal(true);
    });

    it('should return false for non-integer numbers', () => {
      expect(NumbersValidator.isInteger(2.5)).to.equal(false);
    });

    it('should throw an error for non-number inputs', () => {
      expect(() => NumbersValidator.isInteger('a')).to.throw(Error);
    });
  });
});
