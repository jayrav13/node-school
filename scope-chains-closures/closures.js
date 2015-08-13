function foo() {
	var bar = 'test';

	quux = 'outside test';

	function zip() {
		var quux = 'another test';
		bar = true;
	}

	return zip

}
