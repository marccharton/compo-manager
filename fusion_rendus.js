const fs = require('fs');
const path = require('path');
const config = require('./config');

function checkFolders() {
    fs.readdirSync(config.basePath).forEach(file => {
        if (config.excludeFolders.includes(file)) {
            console.log("next");
            return ;
        }
        
        const currentFilePath = path.join(config.basePath, file);
        
        //fs.unlink('vue d\'ensemble.txt', () => {});

        // check if it's a directory
        if (fs.lstatSync(currentFilePath).isDirectory()) {
            // console.log(`Analyse du dossier : ${currentFilePath}`);
            
            process.chdir(file);

            const doesOutFolderExists = outFolderExists();
            console.log(`${currentFilePath} : ${doesOutFolderExists ? "Il y a un dossier de rendu" : "NOPE" }`);

            process.chdir("../");

            fs.appendFileSync('vue d\'ensemble.txt', `${currentFilePath} : ${doesOutFolderExists ? "Dossier de rendu présent" : "NOPE" }\n`);
        }
    });
}

function outFolderExists() {
    let outFolderAccessible = false;
    
    config.outFolderList.forEach((outFolderName) => {
        try {
            fs.accessSync(outFolderName, fs.F_OK);
            outFolderAccessible = true;
        }
        catch (err) {
            return
        }
    })
    return outFolderAccessible;
}

process.chdir(config.basePath);
checkFolders();