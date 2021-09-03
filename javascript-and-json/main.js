var books = [
  {
    isbn: '978-9027930040',
    title: 'General and Rational Grammar',
    author: 'Antoine Arnauld and Claude Lancelot'
  },
  {
    isbn: '978-1614278047',
    title: 'Syntactic Structures',
    author: 'Noam Chomsky'
  },
  {
    isbn: '978-0198270126',
    title: 'Foundations of Language',
    author: 'Ray Jackendoff'
  }
];

console.log('books:', books);
console.log('books Type:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('booksJSON:', booksJSON);
console.log('booksJSON type:', typeof booksJSON);

var student = '{"name":"Ryan Zhao","id":"9773"}';

console.log('student:', student);
console.log('student type:', typeof student);

var studentObj = JSON.parse(student);

console.log('studentObj:', studentObj);
console.log('studentObj type:', typeof studentObj);
