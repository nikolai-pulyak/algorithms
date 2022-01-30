import * as chai from "chai"
import {binarySearch} from "./binary.search"

const assert = chai.assert

describe("binarySearch", () => {
  it("numbers", () => {
    const arr = [0,1,2,3,5,8,12,20,32,52,84]
    assert.equal(binarySearch(arr, 5), 4)
    assert.equal(binarySearch(arr, 32), 8)
  })
  it("strings", () => {
    const arr = ["a", "b", "c", "d", "f", "g", "h"]
    assert.equal(binarySearch(arr, "f"), 4)
    assert.equal(binarySearch(arr, "a"), 0)
  })
})