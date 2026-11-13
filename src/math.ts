export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError("Both arguments must be finite numbers")
  }

  return a * b
}
