#ifndef PARSER_H
#define PARSER_H

#include <stdint.h>

uint32_t get_word_count(char letter);
char* get_word(char letter, uint32_t index);
char*** get_words(char letter, uint32_t* count);
char** create_word_array(char letter, uint32_t* count);
void free_words(char*** words, uint32_t count);
void free_word_array(char** words, uint32_t count);

#endif
