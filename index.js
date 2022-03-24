const fs = require('fs')

if (!fs.mkdir('./MyFunnyFolder', () => {})) {
    fs.mkdir('./MyFunnyFolder', () => {})
    console.log('Wurde erstellt');
}

if (fs.existsSync('./MyFunnyFolder', () => {})) {
    fs.rmdir('./MyFunnyFolder', () => {})
    console.log('Folder deleted');
}

fs.mkdir('./What', () => {
    console.log('what folder exist');
})

if (!fs.existsSync('./What/isThis.txt', () => {})) {

    fs.appendFile('./What/isThis.txt', 'peep peep mf', (err) => {
        if (err) {
            console.log('No wonder happend');
        }
        console.log('file has been created');
    })
}