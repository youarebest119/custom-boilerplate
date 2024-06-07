const fs = require('fs');
const path = require('path');

function updateAppFile() {
    const appFilePathJsx = path.join(process.cwd(), 'src', 'App.jsx');
    const appFilePathTsx = path.join(process.cwd(), 'src', 'App.tsx');
    let appFilePath = '';

    if (fs.existsSync(appFilePathJsx)) {
        appFilePath = appFilePathJsx;
    } else if (fs.existsSync(appFilePathTsx)) {
        appFilePath = appFilePathTsx;
    } else {
        console.error('Error: Could not find App.jsx or App.tsx in the src directory.');
        process.exit(1);
    }

    const appFileContent = `import { Toaster } from 'react-hot-toast'
import Application from './Application'

function App() {
  return (
    <>
      <Toaster />
      <Application />
    </>
  )
}

export default App
`;

    fs.writeFileSync(appFilePath, appFileContent, 'utf8');
    console.log('Updated App file.');
}

module.exports = updateAppFile;
