const fs = require('fs');
const axios = require('axios');

console.log(
    process.argv
);

if(process.argv[2] == '--out'){
    if(is_url(process.argv[4])){
        webCatWrite(process.argv[4], process.argv[3]);
    } else {
        catWrite(process.argv[4], process.argv[3]);
    }

} else {
    if(is_url(process.argv[2])){
        webCat(process.argv[2]);
    } else {
        cat(process.argv[2]);
    }
}

function cat(path){
    fs.readFile(path,'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });
}
function catWrite(path, fileName){
    try{
        fs.readFile(path,{encoding:'utf8'}, (err, data) => {
            if (err) throw err;
            let content = data;
            fs.writeFile(fileName, content,{flag: 'as+'}, (err, data) => {
                if (err) throw err;
            })
            });
    }catch(e){
        console.log(e)
    }

}

async function webCat(path){
    try {
        let website = await axios.get(path);
        console.log(website.data);
    }
    catch(err){
        console.log(err);
    }
}
async function webCatWrite(path, fileName){
    try {
        let website = await axios.get(path);
        let content = website.data;
        fs.writeFile(fileName, content,{flag: 'as+'}, (err, data) => {
            if (err) throw err;
        })
    }
    catch(err){
        console.log(err);
    }
}


//checks if input is filepath or website
function is_url(str)
{
  regexp =  /^(http:\/\/www.)|^(https:\/\/www.)/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

// console.log(is_url(process.argv[2]));