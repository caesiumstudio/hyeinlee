var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "leehye",
    // Password optional, prompted if none given
    password: "D3zJxe5PZE4uPUJ6",
    host: "www224.your-server.de",
    port: 22,
    localRoot: __dirname + "/dist",
    remoteRoot: "/public_html/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*.php", "*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    sftp: true
};

// console.log(JSON.stringify(config));
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
