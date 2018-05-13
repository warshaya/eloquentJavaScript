
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply (a, b) {
  let result;
  for (;;) {
    try {
      result = primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        // do nothing
      } else {
        throw e;
      }
    }
  }
  return result;
}

module.exports = { reliableMultiply };

