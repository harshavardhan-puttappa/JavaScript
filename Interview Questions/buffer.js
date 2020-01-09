let buf = new Buffer.alloc(100);
let len = buf.write("Welcome to buffer");
console.log("Len=" + len);
console.log("Buffer=" + buf);
