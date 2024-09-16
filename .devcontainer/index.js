const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
    ];
const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']