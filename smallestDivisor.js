const divideAndSum = (nums, divisor) => {
  return nums.reduce((acc, num) => acc + Math.ceil(num / divisor), 0);
};

const smallestDivisor = function (nums = [44, 22, 33, 11, 1], threshold = 5) {
  let divisor = 1;
  let totalSum = divideAndSum(nums, divisor);

  while (totalSum > threshold) {
    divisor++;
    totalSum = divideAndSum(nums, divisor);
  }

  return { totalSum, divisor };
};

const { totalSum, divisor } = smallestDivisor();

console.log({ totalSum, divisor });
