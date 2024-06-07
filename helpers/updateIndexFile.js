const fs = require('fs');
const path = require('path');

function updateIndexFile() {
    // Step 9: Remove the index.css file if it exists
    const indexCssFilePath = path.join(process.cwd(), 'src', 'index.css');
    if (fs.existsSync(indexCssFilePath)) {
        fs.unlinkSync(indexCssFilePath);
        console.log('Removed index.css file.');
    }

    // Step 10: Create a new file called index.scss and fill it with the provided code
    const indexScssFilePath = path.join(process.cwd(), 'src', 'index.scss');
    const indexScssContent = `@import "./assets/theme/_var.scss";

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
  margin-bottom: 0;
}

img,
svg,
video,
canvas,
iframe {
  max-width: 100%;
}

a {
  text-decoration: none;
}

a,
span {
  display: inline-block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.clickable {
  cursor: pointer !important;
}

.modal {
  &.fade {
    .modal-dialog {
      transform: scale(0.9);
      opacity: 0;
      transition: 400ms ease-in-out;
    }

    &.show {
      .modal-dialog {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}

.modal-backdrop {
  transition: 400ms ease-in-out;

  &.show {
    opacity: 1;
    background-color: rgba(black, 0.5);
    backdrop-filter: blur(10px);
  }
}

.table {
  --bs-table-bg: transparent;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  -webkit-text-fill-color: black !important;
}

//  z -indexes
.z-xlg {
  z-index: 15 !important;
}

.z-lg {
  z-index: 10 !important;
}

.z-md {
  z-index: 5 !important;
}

.z-low {
  z-index: 1 !important;
}

// toast
.go4109123758 {
  font-size: 1.4rem;
}

.row {
  margin: -0.75rem;

  >div {
    padding: 0.75rem;
  }
}

.container {
  max-width: 103rem;
  padding: 0 1.5rem;
}

h2 {
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
}
`;

    fs.writeFileSync(indexScssFilePath, indexScssContent, 'utf8');
    console.log('Created index.scss file.');

    // Update main file to import index.scss
    const mainFilePath = findMainFile();
    if (mainFilePath) {
        let mainFileContent = fs.readFileSync(mainFilePath, 'utf8');
        mainFileContent = mainFileContent.replace(
            "import './index.css';",
            "import './index.scss';"
        );
        fs.writeFileSync(mainFilePath, mainFileContent, 'utf8');
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

module.exports = updateIndexFile;
