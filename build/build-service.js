const path = require("path")
const { entry, alias } = require("./packages.js")
const child_process = require("child_process")
const cwd_path = path.resolve(__dirname, "../")

if (entry.base) {
  child_process.spawnSync("vue-cli-service", ["build", `conf=${base64Info}`], {
    cwd: cwd_path,
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  delete entry.base
}
