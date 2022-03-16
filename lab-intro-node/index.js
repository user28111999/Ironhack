class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length += 1
    return this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (this.items.indexOf(pos) == -1) {
      throw new Error("OutOfBounds")
    }

    return this.items.indexOf(pos)
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList")
    return Math.max(...this.items)
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList")
    return Math.min(...this.items)
  }

  sum() {
    if (!this.items.length) return 0
    return this.items
      .reduce((a, b) => { return a + b }, 0)
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList")
    return this.items
      .reduce((a, b) => a + b) / this.items.length
  }
}

module.exports = SortedList;
