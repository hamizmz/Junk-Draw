import Sys;

class HelloWorld {
	static public function main() {
		var box = {
			x: 0,
			y: 0,
			width: 10,
			height: 10
		};
		
		var even_numbers = [
			for (i in 0...100) {
				if (i % 2 == 0)
					i
			}
		];
		
		Sys.println("Hello, World.");
		Sys.println("You are using " + Sys.systemName());
		
		Sys.println("\nWe made a box:");
		Sys.println(box);
		
		Sys.println("And we made a list of even numbers, yo:");
		Sys.println(even_numbers);
	}
}