require("dotenv").load();

function getIP(json) {
    process.env.USERIP = json.ip;
}