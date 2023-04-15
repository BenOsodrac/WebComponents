const axios = require('axios');
const yargs = require('yargs');

// Define the command-line options
const argv = yargs.options({
    'url': { describe: 'The URL of the API endpoint', demandOption: true, type: 'string' },
    'dist': { describe: 'The path to the dist files', demandOption: true, type: 'string' },
}).argv;

// Call the API endpoint with the dist files
axios.post(argv.url, {
    files: argv.dist
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.error(error);
});
