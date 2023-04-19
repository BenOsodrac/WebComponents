const request = require('request');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const distPath = 'dist/';
const endpoint = 'https://personal-oo8cwon9.outsystemscloud.com/ComponentsBuilder_API/rest/ComponentsBuilder/BuildModule';
const guid = uuidv4(); // generate a new GUID

fs.readdir(distPath, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }


  console.log('Files in ' + distPath + ' for the requestId = ' + guid + ':');

  files.forEach(function(file) {

    const filePath = path.join(distPath, file);
    const fileStream = fs.createReadStream(filePath);

    const options = {
      url: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Filename': file,
        'GUID': guid
      },
      body: fileStream
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
