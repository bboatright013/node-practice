const fs = require('fs');
const axios = require('axios');
let requested_path = process.argv[2];

console.log(
    process.argv
)


function cat(path){
    let file = fs.readFile(`${path}`,'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });
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

if(is_url(process.argv[2])){
    webCat(requested_path);
} else {
    cat(requested_path);
}

//attributed to w3resource.com
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

console.log(is_url(process.argv[2]));