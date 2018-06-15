Konami = require("konami");
const {dialog} = require('electron').remote;
const base64 = require('file-base64');
const fs = require('fs');
const request = require("request");


const easter_egg = new Konami(function() {
    dialog.showOpenDialog({properties: ['openFile', 'multiSelections']}, filePaths => {
        alert(filePaths);
        fs.readFile(filePaths[0], (err, data) => {
            let base64Image = new Buffer(data, 'binary').toString('base64');
            alert(base64Image);
            fs.writeFile("test.txt", base64Image);
            request.post('http://files.treelar.com/phpfilereciver/', {form:{"data": base64Image}}, function(err,httpResponse,body){
                console.log(body)
            })
        });
    })
});
