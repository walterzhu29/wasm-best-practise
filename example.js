var factory = require('./c_api.js');
factory().then((wasm) => {
    const streamByte = new Uint8Array([0xd5, 0x33, 0xa9, 0x49, 0x74, 0xb, 0xb3, 0x30, 0x6d, 0x11, 0x9c, 0xc7, 0x77, 0xfa, 0x90, 0xb, 0xa0, 0x34, 0xcd, 0x52]);
    const streamByteBuf = wasm._malloc(streamByte.length * streamByte.BYTES_PER_ELEMENT);
    wasm.HEAPU8.set(streamByte, streamByteBuf);
    var result1 = wasm._readByteReturnInt(streamByteBuf, streamByte.length);
    process.stdout.write(`return int: ${result1} \n`);
    wasm._free(streamByteBuf);


    let streamInt = new Int32Array(1 * 12);
    const streamIntBuf = wasm._malloc(streamInt.length * streamInt.BYTES_PER_ELEMENT);
    wasm.HEAP32.set(streamInt, streamIntBuf / streamInt.BYTES_PER_ELEMENT);
    wasm._readAndModifyInput(streamIntBuf, streamInt.length); 
    var modifiedStreamInt = wasm.HEAP32.subarray(streamIntBuf / streamInt.BYTES_PER_ELEMENT, streamIntBuf / streamInt.BYTES_PER_ELEMENT+ streamInt.length);
    for(let i = 0; i < streamInt.length; i++) {
        process.stdout.write(`${modifiedStreamInt[i]} `);
    }
    process.stdout.write(`\n`);
    wasm._free(streamIntBuf);
});
