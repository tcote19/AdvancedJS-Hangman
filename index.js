var fs = require('fs');
var inquirer = require('inquirer');
var prompt = require('prompt');

var storedWord = [];

var ChooseWord = function(){
	  fs.readFile("word.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.split(", ");
    var result = 0;


}
}
