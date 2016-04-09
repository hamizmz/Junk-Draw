string parse(string[] args) {
	var o = "";
	for (var i = 1; i < args.length; i++) {
		o += args[i] + "\n";
	}
	return o;
}

int main(string[] args) {
	stdout.printf("The number of arguments passed is: %i\n", args.length);
	stdout.printf("The data is as follows:\n%s", parse(args));
	return 0;
}