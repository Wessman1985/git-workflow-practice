import test from "node:test"
import assert from "node:assert/strict"
import { add, multiply } from "./math.js"

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
