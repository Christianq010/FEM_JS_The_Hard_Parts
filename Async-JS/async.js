// Some come back with data. The design of the Browser API
// we are using determines how we access the returned data

function display (data) {
    console.log(data.post);
}

$.get('https://twitter.com/willsen/tweet/1', display);

console.log("Me first!");