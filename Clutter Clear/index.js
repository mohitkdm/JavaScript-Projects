const fs = require('fs');
const path = require('path');

const directoryPath = './your-directory'; // Replace with your directory path

function organizeFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file: ${err.message}`);
          return;
        }

        if (stats.isFile()) {
          const fileExt = path.extname(file).toLowerCase().slice(1);
          const folderName = fileExt;

          const destinationDir = path.join(dirPath, folderName);
          const destinationPath = path.join(destinationDir, file);

          if (!fs.existsSync(destinationDir)) {
            fs.mkdirSync(destinationDir);
          }

          fs.rename(filePath, destinationPath, (err) => {
            if (err) {
              console.error(`Error moving file: ${err.message}`);
            } else {
              console.log(`Moved ${file} to ${folderName}`);
            }
          });
        }
      });
    });
  });
}

organizeFiles(directoryPath);
