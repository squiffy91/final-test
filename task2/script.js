"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];

//Вариант 1
/*var arr2 = arr.sort(function(a,b) {
  return a > b;
})
console.log(arr2)*/

//Вариант 2 bubble sort

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      let someVar = arr[i];
      arr[i] = arr[j];
      arr[j] = someVar;
    }
  }
}
console.log(arr);

// задача 2

var str = "The quick brown fox jumps over the lazy dog";

str = str.split( ' ' ).filter(function ( str ) {
    var word = str.match(/(\w+)/);
    return word && word[0].length > 4;
}).join( ' ' );

console.log(longestWord("The quick brown fox jumps over the lazy dog"));
// задача 3

// This is the added paragraph in the HTML //    <p id="para">repetition is fun</p>


var counter = "repetition is fun";
window.setInterval(
function () {
    counter = counter + "<p>repetition is fun</p>";
    document.getElementById("para").innerHTML = counter;
}, 1000);
// задача 4
$(document).ready(function() {
    var count=0
    	    setInterval(function() {
    			$('li img').hide()
    			if(count===6){count=0}
    			   count++
                   $('#li'+count).find('img').show()
               }, 2000);
});

// задача 5

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function doSomething() {
    var myCookie = getCookie("sessionKey");

    if (myCookie == null) {
    }
    else {
    }
}
