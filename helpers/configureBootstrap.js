const fs = require('fs');
const path = require('path');

function configureBootstrap() {
    console.log('Setting up Bootstrap in the project...');
    const mainFilePath = findMainFile();

    if (mainFilePath) {
        let mainFileContent = fs.readFileSync(mainFilePath, 'utf8');
        mainFileContent = mainFileContent.replace(
            "import './index.css'",
            "import 'bootstrap/dist/css/bootstrap.min.css';\nimport './index.css';"
        );
        fs.writeFileSync(mainFilePath, mainFileContent, 'utf8');
    } else {
        console.error('Error: Could not find main or index file in the src directory.');
        process.exit(1);
    }
}

function findMainFile() {
    const mainFilePaths = [
        path.join(process.cwd(), 'src', 'main.jsx'),
        path.join(process.cwd(), 'src', 'main.tsx'),
        path.join(process.cwd(), 'src', 'main.js'),
        path.join(process.cwd(), 'src', 'index.jsx'),
        path.join(process.cwd(), 'src', 'index.js'),
        path.join(process.cwd(), 'src', 'index.tsx')
    ];

    for (const mainFilePath of mainFilePaths) {
        if (fs.existsSync(mainFilePath)) {
            return mainFilePath;
        }
    }
    return null;
}

module.exports = configureBootstrap;
