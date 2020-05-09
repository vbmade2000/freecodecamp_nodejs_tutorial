const fs = require('fs');
const zlib = require('zlib');

fs.writeFile('./example.txt', 'Hey this is example file created from tutorial', (error)=>{
    if (error) {
        console.log('Error in writing to file');
    }
});

// Regular example
readStream1 = fs.createReadStream('./example.txt', 'utf-8');
writeStream1 = fs.createWriteStream('./example2.txt', 'utf-8');
readStream1.on('data', (chunk)=>{
    writeStream1.write(chunk);
});

// Stream pipe example
readStream2 = fs.createReadStream('./example.txt', 'utf-8');
writeStream2 = fs.createWriteStream('./example3.txt', 'utf-8');
readStream2.pipe(writeStream2);

// Pipe chaining xample
readStream3 = fs.createReadStream('./example.txt', 'utf-8');
writeStream3 = fs.createWriteStream('./example_compressed.txt', 'utf-8');
gzip_stream = zlib.createGzip();
readStream3.pipe(gzip_stream).pipe(writeStream3);






// readStream.close();
// writeStream.close();
