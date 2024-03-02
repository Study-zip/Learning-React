const reducer = (count, delta) => {
  if (delta < 0) {
    throw new Error("delta cannot be negative");
  }
  if (delta > 10) {
    // 너무 크다면 무시
    return count;
  }
  if (count < 100) {
    // 보너스를 더한다.
    return count + delta + 10;
  }
  return count + delta;
};
