'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let flag = 0;
  let sum = 0;

  const makeSum = (a) => {
    if (typeof a === 'number') {
      sum += a;
      flag = 0;

      return makeSum;
    } else if (typeof a !== 'number') {
      flag++;

      sum = flag === 2 ? 0 : sum;

      return sum;
    }
  };

  return makeSum;
}

module.exports = makeInfinityAdder;
