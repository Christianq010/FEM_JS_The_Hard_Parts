function bar(x,y) {
	var z;

	foo(x);
	return [y,z];

	function foo(x) {
		y++;
		z = x * y;
	}
}

// y is bad as it is declared somewhere else and incremented here
// understand that x, y are inputs, z is output

bar(20,5);		// [6,120]

bar(25,6);		// [7,175]
