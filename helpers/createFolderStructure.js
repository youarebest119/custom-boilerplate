const fs = require('fs');
const path = require('path');

function createFolderStructure() {
    const imagesFolderPath = path.join(process.cwd(), 'src', 'assets', 'images');
    const iconsFolderPath = path.join(process.cwd(), 'src', 'assets', 'icons');
    const themeFolderPath = path.join(process.cwd(), 'src', 'assets', 'theme');

    // Create images folder
    fs.mkdirSync(imagesFolderPath, { recursive: true });
    console.log('Created src/assets/images folder.');

    // Create icons folder and icons file
    fs.mkdirSync(iconsFolderPath, { recursive: true });
    let iconsFilePath = '';

    if (fs.existsSync(path.join(process.cwd(), 'src', 'main.jsx'))) {
        iconsFilePath = path.join(iconsFolderPath, 'icons.jsx');
    } else if (fs.existsSync(path.join(process.cwd(), 'src', 'main.tsx'))) {
        iconsFilePath = path.join(iconsFolderPath, 'icons.tsx');
    } else if (fs.existsSync(path.join(process.cwd(), 'src', 'main.js'))) {
        iconsFilePath = path.join(iconsFolderPath, 'icons.js');
    }

    fs.writeFileSync(iconsFilePath, '', 'utf8');
    console.log(`Created ${iconsFilePath} file.`);

    // Create theme folder and _var.scss file
    fs.mkdirSync(themeFolderPath, { recursive: true });
    const varScssFilePath = path.join(themeFolderPath, '_var.scss');
    fs.writeFileSync(varScssFilePath, '', 'utf8');
    console.log('Created src/assets/theme/_var.scss file.');
}

module.exports = createFolderStructure;
