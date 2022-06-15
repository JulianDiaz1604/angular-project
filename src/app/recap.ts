const username: string | number = 'Julian';
const sum = (a:number, b: number) => {
  return a + b;
}
sum(1,3);

class Person {
  constructor(private age: number, private lastName: string) {
  }
}

const juli = new Person(20, 'Diaz');
