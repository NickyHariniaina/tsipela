#include "../include/parser.h"
#include <json-c/json.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

static char* construct_path(char letter) {
    char* path = malloc(sizeof(char) * 20);
    sprintf(path, "data/litera_%c.json", letter);
    return path;
}

uint32_t get_word_count(char letter) {
    char* path = construct_path(letter);
    FILE *file = fopen(path, "r");
    if (!file) {
        free(path);
        return 0;
    }
    fseek(file, 0, SEEK_END);
    uint32_t size = ftell(file);
    fseek(file, 0, SEEK_SET);

    char *buffer = malloc(size + 1);
    fread(buffer, 1, size, file);
    buffer[size] = '\0';
    fclose(file);
    free(path);

    json_object *object = json_tokener_parse(buffer);
    free(buffer);

    if (!object) {
        return 0;
    }

    uint32_t word_count = json_object_array_length(object);
    json_object_put(object);
    return word_count;
}

char* get_word(char letter, uint32_t index) {
    char* path = construct_path(letter);
    FILE *file = fopen(path, "r");
    if (!file) {
        free(path);
        return NULL;
    }
    fseek(file, 0, SEEK_END);
    uint32_t size = ftell(file);
    fseek(file, 0, SEEK_SET);

    char *buffer = malloc(size + 1);
    fread(buffer, 1, size, file);
    buffer[size] = '\0';
    fclose(file);
    free(path);

    json_object *object = json_tokener_parse(buffer);
    free(buffer);

    if (!object) {
        return NULL;
    }

    json_object *entry = json_object_array_get_idx(object, index);
    json_object *word_obj;
    char* result = NULL;

    if (json_object_object_get_ex(entry, "word", &word_obj)) {
        const char *mot = json_object_get_string(word_obj);
        result = strdup(mot);
    }

    json_object_put(object);
    return result;
}

char*** get_words(char letter, uint32_t* count) {
    char* path = construct_path(letter);
    FILE *file = fopen(path, "r");
    if (!file) {
        free(path);
        *count = 0;
        return NULL;
    }
    fseek(file, 0, SEEK_END);
    uint32_t size = ftell(file);
    fseek(file, 0, SEEK_SET);

    char *buffer = malloc(size + 1);
    fread(buffer, 1, size, file);
    buffer[size] = '\0';
    fclose(file);
    free(path);

    json_object *object = json_tokener_parse(buffer);
    free(buffer);

    if (!object) {
        *count = 0;
        return NULL;
    }

    uint32_t word_count = json_object_array_length(object);
    char*** result = malloc(sizeof(char**));
    *result = malloc(word_count * sizeof(char*));

    for (uint32_t i = 0; i < word_count; i++) {
        json_object *entry = json_object_array_get_idx(object, i);
        json_object *word_obj;

        if (json_object_object_get_ex(entry, "word", &word_obj)) {
            const char *mot = json_object_get_string(word_obj);
            (*result)[i] = strdup(mot);
        } else {
            (*result)[i] = strdup("");
        }
    }

    json_object_put(object);
    *count = word_count;
    return result;
}

char** create_word_array(char letter, uint32_t* count) {
    uint32_t word_count = get_word_count(letter);
    if (word_count == 0) {
        *count = 0;
        return NULL;
    }

    char** words = malloc(word_count * sizeof(char*));
    if (!words) {
        *count = 0;
        return NULL;
    }

    char* path = construct_path(letter);
    FILE *file = fopen(path, "r");
    if (!file) {
        free(path);
        free(words);
        *count = 0;
        return NULL;
    }

    fseek(file, 0, SEEK_END);
    uint32_t size = ftell(file);
    fseek(file, 0, SEEK_SET);

    char *buffer = malloc(size + 1);
    fread(buffer, 1, size, file);
    buffer[size] = '\0';
    fclose(file);
    free(path);

    json_object *object = json_tokener_parse(buffer);
    free(buffer);

    if (!object) {
        free(words);
        *count = 0;
        return NULL;
    }

    for (uint32_t i = 0; i < word_count; i++) {
        json_object *entry = json_object_array_get_idx(object, i);
        json_object *word_obj;

        if (json_object_object_get_ex(entry, "word", &word_obj)) {
            const char *mot = json_object_get_string(word_obj);
            words[i] = strdup(mot);
        } else {
            words[i] = strdup("");
        }
    }

    json_object_put(object);
    *count = word_count;
    return words;
}

void free_words(char*** words, uint32_t count) {
    if (!words || !*words) {
        return;
    }
    for (uint32_t i = 0; i < count; i++) {
        free((*words)[i]);
    }
    free(*words);
    free(words);
}

void free_word_array(char** words, uint32_t count) {
    if (!words) {
        return;
    }
    for (uint32_t i = 0; i < count; i++) {
        free(words[i]);
    }
    free(words);
}
