// LHS, RHS, how is it compiled and then executed
"use strict";

var foo = "bar";

function bar() {
    var foo = "baz";
}

function baz(foo) {
    foo = "bam";
    bam = "yey"; // error
}