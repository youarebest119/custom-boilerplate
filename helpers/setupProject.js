const { execSync } = require('child_process');

function setupProject(projectName) {
    console.log(`Creating Vite project: ${projectName}`);
    execSync(`npm create vite@latest ${projectName}`, { stdio: 'inherit' });
}

module.exports = setupProject;
