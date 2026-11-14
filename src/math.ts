export function add(a: number, b: number): number {
  return a + b
}

export function multiply({ a, b }: { a: number; b: number }): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError("Both arguments must be finite numbers")
  }

  return a * b
}

export function divide({ a, b }: { a: number; b: number }): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError("Both arguments must be finite numbers")
  }

  if (b === 0) {
    throw new RangeError("Division by zero is not allowed")
  }

  return a / b
}

export function square(a: number): number {
  if (!Number.isFinite(a)) {
    throw new RangeError("Argument must be a finite number")
  }

  return a * a
}

export function subtract(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError("Both arguments must be finite numbers")
  }

  return a - b
}
