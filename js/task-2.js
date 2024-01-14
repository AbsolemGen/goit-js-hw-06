class Storage {
  #items;
  constructor(item) {
    this.#items = item;
  }
  getItems() {
    return this.#items;
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(item) {
    const index = this.#items.indexOf(item);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}
