describe("default parameters", function(){

	it("provides defaults", function(){

		let doWork = function(name="Martin"){
			return name;
		};

		var result = doWork();

		expect(result).toBe("Martin");

		var result2 = doWork("Gustafsson");

		expect(result2).toBe("Gustafsson");

	});

});