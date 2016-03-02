import Sys;

class HelloWorld {
	static public function main() {
		var box = {
			x: 0,
			y: 0,
			width: 10,
			height: 10
		}
		
		Sys.println("Hello, World.");
		Sys.println("You are using " + Sys.systemName());
	}
}