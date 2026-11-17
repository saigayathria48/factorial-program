'use strict';

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Enter a non-negative integer');
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

if (require.main === module) {
  const n = Number(process.argv[2] ?? 5);

  try {
    console.log(`Factorial of ${n} = ${factorial(n)}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { factorial };
