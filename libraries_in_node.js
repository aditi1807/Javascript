const os = require('node:os');
console.log(require('node:os'));
console.log(os.freemem());
console.log((os.EOL));  //The operating system-specific end-of-line marker.
console.log(os.availableParallelism());
console.log(os.constants);
console.log(os.devNull);
console.log(os.homedir());
console.log(os.hostname())

// Only sone funtions used of OS module kindly refer to https://nodejs.org/api/os.html#osavailableparallelism documentation