FILE_TO_COMPILE = $(wildcard src/impl/*.c)
run:
	mkdir -p build
	gcc -o build/main $(FILE_TO_COMPILE) src/main.c -I src/include -ljson-c
	./build/main
