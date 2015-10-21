// console.log("Hello World");

var words = "The quick brown fox jumped over the lazy dog";

function reverseWords(words){
    var p = [];
    var q = [];

    for (var i = words.length - 1; i >= 0; i--) {
        p.push(words[i]);
    }

    for (var j = 0; j < p.length; j++) {

        if(p[j] === " "){

            q.push(p.splice(0, j + 1).reverse().toString().replace(/,/g, ''));

            j = 0;
        }
    }

    return q.toString().replace(/,/g, '');
}

console.log(reverseWords(words));