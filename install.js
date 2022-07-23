const fs = require("fs");
const path = require("path");

// Check platform
const platform = process.env.platform || process.platform;

// Get file extension
const fileExtension = platform === "win32" ? ".exe" : "";
console.log(`Making phantomjs binary executable for all users on ${platform}`);

// Give Permission
try {
  const binaryPath = path.join(
    __dirname,
    `./phantom-binary/phantomjs${fileExtension}`
  );
  fs.chmodSync(binaryPath,00111);
  console.log("Successfully made phantomjs executable");
} catch (error) {
  console.log(
    "Error occured while making phantomjs binary executable :\n",
    error
  );
}
