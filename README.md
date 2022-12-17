### 例子
1. `readByteReturnInt` 从JavaScript传递byte数组给C语言编译的wasm并且返回int
2. `readAndModifyInput` 从C语言编译的wasm返回int数组给JavaScript

### 命令
```
emcc example.c -o c_api.js -s MODULARIZE -s EXPORTED_RUNTIME_METHODS=ccall -s 'EXPORTED_FUNCTIONS=["_malloc", "_free"]' -s ALLOW_MEMORY_GROWTH
node example.js
```
