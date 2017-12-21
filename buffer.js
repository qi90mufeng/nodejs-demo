buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//console.log( buf.toJSON());  //转为json对象
//缓冲区合并
var buf1 = Buffer.from(("高级"))
var buf2 = Buffer.from(("教程"));

var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());