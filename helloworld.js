
console.log('Hello World');

function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "hello");
execute(function(word) { console.log(word) }, "Hi there!");

database.query("SELECT * FROM hugetable", function(rows) {
  var result = rows;
});
