// old / modified module pattern
var foo = (function() {
    var publicAPI= {
        bar: function() {
            publicAPI.baz();
        },
        baz: function() {
            console.log("baz");
        }
    };
    return publicAPI;
})();
foo.bar();

// an example of the modern module pattern
define ("foo", function() {
    var o = {bar = "baz"}

    return {
        bar: function() {
            console.log(o.bar);
        }
    };
});
