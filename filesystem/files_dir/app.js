const fs = require('fs');

fs.writeFile('Hello.txt', 'Hello World', (error)=>{
    if (error) {
        console.log('Got an error', error);
    } else {
        console.log('Successfully created');
        fs.readFile('Hello.txt', 'utf-8', (error, file)=> {
            if (error) {
                console.log('Error in reading file', error);
            } else {
                console.log(file);
            }
        })
    }
});

fs.rename('Hello.txt', 'Hello-World.txt', (error)=> {
    if (error) {
        console.log('Error in renaming file');
    } else {
        console.log('Sucessfully renamed');
    }
});

fs.appendFile('Hello-World.txt', 'This is the data to append', (error)=>{
    if (error){
        console.log('Error in appending data');
    } else {
        console.log('Successfully appended data');
    }
});

fs.unlink('Hello-World.txt', (error)=>{
    if (error) {
        console.log('Error in deleting file');
    } else {
        console.log('Successfully deleted the file');
    }
});

fs.mkdir('mydir', (error)=>{
    if (error) {
        console.log('Error in creating dir');
    } else {
        console.log('Successfully created dir');
    }
})

fs.readdir('/tmp', (error, files)=> {
    if (error) {
        console.log('Error in reading dir');
    } else {
        for (let file of files) {
            console.log(`Files: ${file}`);
        }
    }
});

fs.rmdir('mydir', (error)=>{
    if (error) {
        console.log('Error in deleting dir');
    } else {
        console.log('Successfully deleted dir');
    }
});
