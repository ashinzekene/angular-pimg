const fs = require("fs")
const path = require("path")

const artifacts = ["README.md", "LICENSE.md", "pimg.svg"]
artifacts.forEach(file => {
  let fromPath = path.resolve(__dirname, '..', 'projects/angular-pimg/', file)
  let destPath = path.resolve(__dirname, '..', 'dist/angular-pimg/', file)
  fs.readFile(fromPath, "utf-8", (err, data) => {
    if (err) {
      console.log("An error occured:", err)
      return
    }
    fs.writeFile(destPath, data, (err) => {
      if (err) {
        console.log("An error occured:", err)
        return
      }
      console.log(`Copied ${file}:`)
    })
  })
})