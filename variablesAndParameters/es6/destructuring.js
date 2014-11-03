describe("destructuring", function(){

	it("can destructure arrays", function(){

		let [, x, y, z] = [1, 3, 2];

		expect(x).toBe(3);
		expect(y).toBe(2);	
		expect(z).toBeUndefined();

	});

	it("can destruct objects", function(){

		let doWork = function(){
			return {
				firstName: 'Martin',
				lastName: 'Gustafsson',
				handles: {
					twitter: 'm_gusten'
				}				
			};			
		};

		let { 
			firstName, 
			handles: {twitter} 
		} = doWork();

		expect(firstName).toBe('Martin');
		expect(twitter).toBe('m_gusten');

	});

	it("works with parameters", function(){
		
		let doWork = function(url, {data, cache}){
			return data;
		};

		let result = doWork(
				'api/test', {
					data: 'test',
					cache: false
				}
			);

		expect(result).toBe('test');
	});

});