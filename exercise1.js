//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.


function addBinary(a, b) {
  let num = a + b;
  let binary = Number(num).toString(2);
  return binary;
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends) {

  friends.filter((name) => name.length === 4)

  //your code here
}

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");