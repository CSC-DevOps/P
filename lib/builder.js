const path = require('path');
const fs = require('fs');

const dockerProvider = require("./dockerProvider");

class Builder {

    async buildPackageImage() {

        await dockerProvider.build("p:latest", path.dirname("images/Dockerfile"));

    }

}

module.exports = new Builder();