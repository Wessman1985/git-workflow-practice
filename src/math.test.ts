import test from "node:test"
import assert from "node:assert/strict"
import { add, multiply, divide, square, subtract, power } from "./math.js"

test("add should add two positive numbers", () => {
  assert.equal(add(5, 10), 15)
})

test("add should handle negative numbers", () => {
  assert.equal(add(-5, 10), 5)
})

test("add should handle zero", () => {
  assert.equal(add(0, 10), 10)
})

test("multiply should multiply two positive numbers", () => {
  assert.equal(multiply({ a: 5, b: 10 }), 50)
})

test("multiply should handle negative numbers", () => {
  assert.equal(multiply({ a: -5, b: 10 }), -50)
})

test("multiply should handle zero", () => {
  assert.equal(multiply({ a: 0, b: 10 }), 0)
})

test("multiply should reject NaN", () => {
  assert.throws(() => multiply({ a: NaN, b: 5 }), RangeError)
})

test("multiply should reject Infinity", () => {
  assert.throws(() => multiply({ a: Infinity, b: 5 }), RangeError)
})

test("multiply should reject negative Infinity", () => {
  assert.throws(() => multiply({ a: 5, b: -Infinity }), RangeError)
})

test("divide should divide two positive numbers", () => {
  assert.equal(divide({ a: 10, b: 2 }), 5)
})

test("divide should handle negative numbers", () => {
  assert.equal(divide({ a: -10, b: 2 }), -5)
})

test("divide should handle division by zero", () => {
  assert.throws(() => divide({ a: 10, b: 0 }), RangeError)
})

test("divide should reject NaN", () => {
  assert.throws(() => divide({ a: NaN, b: 2 }), RangeError)
})

test("divide should reject Infinity", () => {
  assert.throws(() => divide({ a: Infinity, b: 2 }), RangeError)
})

test("square should calculate the square of a positive number", () => {
  assert.equal(square(5), 25)
})

test("square should handle negative numbers", () => {
  assert.equal(square(-5), 25)
})

test("square should handle zero", () => {
  assert.equal(square(0), 0)
})

test("square should handle decimal numbers", () => {
  assert.equal(square(1.5), 2.25)
})

test("square should reject NaN", () => {
  assert.throws(() => square(NaN), RangeError)
})

test("square should reject Infinity", () => {
  assert.throws(() => square(Infinity), RangeError)
})

test("square should reject negative Infinity", () => {
  assert.throws(() => square(-Infinity), RangeError)
})

test("subtract should subtract two positive numbers", () => {
  assert.equal(subtract(10, 3), 7)
})

test("subtract should handle negative results", () => {
  assert.equal(subtract(3, 10), -7)
})

test("subtract should handle zero", () => {
  assert.equal(subtract(10, 0), 10)
})

test("subtract should handle decimal numbers", () => {
  assert.ok(Math.abs(subtract(5.5, 2.2) - 3.3) < 1e-10)
})

test("subtract should reject NaN", () => {
  assert.throws(() => subtract(NaN, 5), RangeError)
})

test("subtract should reject Infinity", () => {
  assert.throws(() => subtract(10, Infinity), RangeError)
})

test("subtract should reject negative Infinity", () => {
  assert.throws(() => subtract(10, -Infinity), RangeError)
})

test("add should reject NaN", () => {
  assert.throws(() => add(NaN, 5), RangeError)
})

test("power should calculate base raised to a positive exponent", () => {
  assert.equal(power(2, 3), 8)
})

test("power should handle zero as exponent", () => {
  assert.equal(power(5, 0), 1)
})

test("power should handle negative exponents", () => {
  assert.equal(power(2, -2), 0.25)
})

test("power should handle zero as base with positive exponent", () => {
  assert.equal(power(0, 3), 0)
})

test("power should reject NaN", () => {
  assert.throws(() => power(NaN, 2), RangeError)
})

test("power should reject Infinity", () => {
  assert.throws(() => power(2, Infinity), RangeError)
})

test("power should reject zero raised to a negative exponent", () => {
  assert.throws(() => power(0, -1), RangeError)
})

test("power should reject negative base with fractional exponent", () => {
  assert.throws(() => power(-2, 0.5), RangeError)
})
