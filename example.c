#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int readByteReturnInt(uint8_t *streamBytes, int len) {
    for(int i = 0; i < len; i ++) {
        printf("%X ", streamBytes[i]);
    }
    printf("\n");
    return 1;
}

EMSCRIPTEN_KEEPALIVE
void readAndModifyInput(int *steamInt, int len) {
    for(int i = 0; i < len; i ++) {
        printf("%d ", steamInt[i]);
        steamInt[i] = 2;
    }
    printf("\n");
}