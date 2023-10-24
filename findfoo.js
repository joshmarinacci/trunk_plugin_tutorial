import process from "process"
// throw errors on missing info
if(process.argv.length < 3) throw new Error("missing filename")
const filename = process.argv[2]
if(filename.match(/foo/)) {
    // on error, print to std and *also* exit with 1
    console.log(`Warning. file has 'foo' in the name '${filename}'`)
    process.exit(1)
}
// on pass, print nothing and exit with 0
process.exit(0)
