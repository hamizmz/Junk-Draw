init
	print "Hello World!!"
	a:int = 1
	b:int8 = 2
	c:int16 = 3
	d:int32 = 4
	// e:int64 = 5
	// print "%i, %i, %i, %i, %lli", a, b, c, d, e
	print "%i, %i, %i, %i", a, b, c, d

	f:uint = 6
	g:uint8 = 7
	h:uint16 = 8
	i:uint32 = 9
	// j:uint64 = 10
	// print "%u, %u, %u, %u, %llu", f, g, h, i, j
	print "%u, %u, %u, %u", f, g, h, i
	
	desc:string = "This is a real number:"
	real:double = 0.5
	print "%s %.2f", desc, real
	
	multiline:string = """
		Yo.. this working dog?
	"""
	print multiline
	
	
