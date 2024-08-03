
import fs from "fs/promises"
import fsn from "fs"
import path from "path";

const basepath = "D:\\Mohit Personal Notes c,python,htnl\\Sigma CSS Web development With Harry Code\\Day 76 to 100\\Day 93 Exercise 15 - Solution & Shoutouts"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("Running For ",item);
    let ext = item.split(".")[item.split(".").length - 1]

    if (ext != "js" && ext != "json" && item.split(".").length > 1){

        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the File to this directory if it is not a js and json file 
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}