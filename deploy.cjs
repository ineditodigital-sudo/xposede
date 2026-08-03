const fs = require("fs");
const path = require("path");
const ftp = require("basic-ftp");

// Lee las credenciales desde .env (no se sube a git). Ver .env.example.
function loadEnv() {
    const envPath = path.join(__dirname, ".env");
    if (!fs.existsSync(envPath)) return;
    for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/i);
        if (!match) continue;
        const value = match[2].trim().replace(/^["'](.*)["']$/, "$1");
        if (!(match[1] in process.env)) process.env[match[1]] = value;
    }
}

async function deploy() {
    loadEnv();

    const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
    const remoteDir = process.env.FTP_REMOTE_DIR || "/public_html";

    if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
        console.log("Faltan credenciales FTP. Copia .env.example a .env y llénalo.");
        process.exit(1);
    }

    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: FTP_HOST,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false
        });
        console.log(`Connected to FTP. Navigating to ${remoteDir}...`);
        await client.ensureDir(remoteDir);

        console.log("Uploading build directory...");
        // uploadFromDir(localPath, remotePath) uploads files from local to remote directory
        // It does not delete existing files that aren't in the local directory.
        await client.uploadFromDir("build", remoteDir);

        console.log("Deployment completed successfully!");
    }
    catch (err) {
        console.log("Error during deployment:", err);
        process.exit(1);
    }
    client.close();
}

deploy();
