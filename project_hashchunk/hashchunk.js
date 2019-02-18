function chunk(){
var file = document.getElementById('file').files[0];
var chunkSize = 64*1024;
var fileSize = file.size; 
var chunks = Math.ceil(file.size/chunkSize,chunkSize); 
var chunk = 0; 

console.log('file size..',fileSize); 
console.log('chunks...',chunks); 

while (chunk <= chunks) { 
    var offset = chunk*chunkSize; 
    console.log('current chunk..', chunk);
    console.log('offset...', chunk*chunkSize);
    console.log('file blob from offset...', offset)
    //console.log(file.slice(offset,chunkSize));
    //console.log(file.slice(offset,offset+chunkSize));
    console.log(sha1(file));
    var slice = file.slice(offset,offset+chunkSize)
    console.log(slice);
    chunk++;
}
}
