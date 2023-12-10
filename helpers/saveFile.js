const fs = require("fs")

const file = "./auxDb/data.json"

const saveFile = (data) => {


  fs.writeFileSync(file, JSON.stringify(data))
}

const readAUxDb = () => {
  if (!fs.existsSync(file)) {
    return null
  }
  const info = fs.readFileSync(file, { encoding: "utf8" })
  const data = JSON.parse(info)
  return data
}

module.exports = { saveFile, readAUxDb }