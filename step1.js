const fs = require('fs');

function cat(path){
let file = fs.readFile(`${path}`,'utf8', (err, data) => {
if (err) throw err;
console.log(data);
});
}
console.log(
    process.argv
)
cat(process.argv[2]);