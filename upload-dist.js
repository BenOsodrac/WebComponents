const request = require('request');
const fs = require('fs');


const distPath = 'dist/';

fs.readdir(distPath, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(function(file) {
    const filePath = distPath + file;
    const fileStream = fs.createReadStream(filePath);

    const options = {
      url: 'https://personal-oo8cwon9.outsystemscloud.com/ComponentsBuilder_API/rest/ComponentsBuilder/BuildModule',
      method: 'POST',
      formData: {
        file: fileStream,
        filename: file
      }
    };

    request(options, function(err, res, body) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`File ${file} uploaded successfully!`);
    });
  });
});
