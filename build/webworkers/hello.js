console.log = function(string) {postMessage(string + '\n');} 
 try { 
let num = 3;
console.log(num * num);
 } catch (err) { postMessage(err); }