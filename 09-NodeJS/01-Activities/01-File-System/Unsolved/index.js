const fs = require('fs');

var profileDataArgs = process.argv.slice(2, process.argv.length);

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./message.txt', fileContent, err => {
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

writeFile(profileDataArgs[0])
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .then(console.log(readFile));

