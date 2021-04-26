const fs = require("fs");

fs.readdirSync(".").filter(name => name.endsWith(".user.js")).forEach(name => {
    let domain = name.replace(".user.js", "");
    fs.writeFileSync(`${domain}.options.json`, JSON.stringify({
            "meta": {
                "name": domain
            }
        }
    ), {encoding: "UTF-8"});
});
