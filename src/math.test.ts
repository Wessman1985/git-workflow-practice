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
  assert.equal(multiply(5, 10), 50)
})

test("multiply should handle negative numbers", () => {
  assert.equal(multiply(-5, 10), -50)
})

test("multiply should handle zero", () => {
  assert.equal(multiply(0, 10), 0)
})
