#include "include/parser.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
    char** words;
    uint32_t count = get_word_count('f');

    words = create_word_array('f', &count);

    for (uint32_t i = 0; i < count; i++) {
        words[i][0] = tolower(words[i][0]);
        if (strcmp("fory", words[i]) == 0) {
            printf("Found word: %s\n", words[i]);
        }
    }

    free(words);
}
