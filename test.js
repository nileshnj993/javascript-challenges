fruit = 'banana';
console.log(fruit.toUpperCase());

var words = ['test', 'abcd', 'nilesh'];
console.log(words.sort()) // strings can be automatically sorted

var arr = [2,1,5,20,15,32,68,6]; // numbers can't be automatically sorted as it considers ascii values to be the comparison function
console.log(arr.sort((a,b) =>{
    return a-b // we need to tell sort method to use a-b to compare greater or smaller. b-a would print in descending order
}))

var object = {
    name: "Nilesh", 
    age: 20,
    disp: function() { // don't use arrow functions if referring to 'this'
        return this.name + "\n" + this.age;
    },
};

console.log(object);
console.log(object['name']);
console.log(object.disp());

var text = '[{"name": "Nilesh", "marks" : 50}, {"name": "Ram", "marks" : 80}]'
console.log(JSON.parse(text))