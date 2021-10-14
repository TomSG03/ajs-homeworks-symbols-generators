export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Такой персонаж уже выбран');
    }
    this.members.add(person);
  }

  addAll(...person) {
    person.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    const array = [...this.members];

    for (const iterator of array) {
      yield iterator;
    }
  }
}
