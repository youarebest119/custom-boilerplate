#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Helper functions
const setupProject = require('./helpers/setupProject');
const installDependencies = require('./helpers/installDependencies');
const configureBootstrap = require('./helpers/configureBootstrap');
const configureSass = require('./helpers/configureSass');
const updateAppFile = require('./helpers/updateAppFile');
const updateIndexFile = require('./helpers/updateIndexFile');
const createFolderStructure = require('./helpers/createFolderStructure');
const createApplicationFile = require('./helpers/createApplicationFile');

const projectName = process.argv[2] || 'vite-project';

// Step 1: Create a Vite project
setupProject(projectName);

// Step 2: Navigate into the project directory
process.chdir(projectName);

// Step 3: Install Bootstrap, React-Bootstrap, and Sass
installDependencies();

// Step 4: Modify Vite project files to include Bootstrap
configureBootstrap();

// Step 5: Install Sass
configureSass();

// Step 6: Create Application file
createApplicationFile();

// Step 7: Update the App file
updateAppFile();

// Step 8: Update the index file
updateIndexFile();

// Step 9: Create the folder structure
createFolderStructure();

console.log('Project setup complete!');
