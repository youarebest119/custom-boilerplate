const fs = require('fs');
const path = require('path');

function createApplicationFile() {
    const mainFilePathJsx = path.join(process.cwd(), 'src', 'main.jsx');
    const mainFilePathTsx = path.join(process.cwd(), 'src', 'main.tsx');
    const mainFilePathJs = path.join(process.cwd(), 'src', 'main.js');
    let applicationFilePath = '';

    if (fs.existsSync(mainFilePathJsx)) {
        applicationFilePath = path.join(process.cwd(), 'src', 'Application.jsx');
    } else if (fs.existsSync(mainFilePathTsx)) {
        applicationFilePath = path.join(process.cwd(), 'src', 'Application.tsx');
    } else if (fs.existsSync(mainFilePathJs)) {
        applicationFilePath = path.join(process.cwd(), 'src', 'Application.js');
    } else {
        console.error('Error: Could not determine the file extension for the Application component.');
        process.exit(1);
    }

    const applicationFileContent = `import React from 'react'

const Application = () => {
  return (
    <>
      
    </>
  )
}

export default Application
`;

    fs.writeFileSync(applicationFilePath, applicationFileContent, 'utf8');
    console.log(`Created ${applicationFilePath} file.`);
}

module.exports = createApplicationFile;
