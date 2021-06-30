const fs = require('fs');

let dataArgs = process.argv.slice(2, process.argv.length);

const writeFile = fileContent => {
    tempArray = [];

    fileContent.forEach(item => {
        tempArray.push(item);
    })

    return new Promise((resolve, reject) => {
        fs.writeFile('./message.txt', tempArray.join(' '), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Done!'
            });
        });
    });
};

const readFile = fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    };
    console.log(data);
})

writeFile(dataArgs)
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .then(console.log(readFile));

