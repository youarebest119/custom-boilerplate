const fs = require('fs');
const path = require('path');

function configureSass() {
    // Step 6: Delete assets folder if it exists
    const assetsFolderPath = path.join(process.cwd(), 'src', 'assets');
    if (fs.existsSync(assetsFolderPath)) {
        fs.rmSync(assetsFolderPath, { recursive: true, force: true });
        console.log('Deleted assets folder.');
    }

    // Step 7: Remove the App.css file if it exists
    const appCssFilePath = path.join(process.cwd(), 'src', 'App.css');
    if (fs.existsSync(appCssFilePath)) {
        fs.unlinkSync(appCssFilePath);
        console.log('Removed App.css file.');
    }
}

module.exports = configureSass;
