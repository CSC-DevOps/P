const chalk = require('chalk');
const pathUtil = require("path");

const builder = require('../lib/builder');

exports.command = 'init';
exports.desc = 'Build ';
exports.builder = yargs => {
    yargs.options({
        force: {
            alias: 'f',
            describe: 'Force the old VM to be deleted when provisioning',
            default: false,
            type: 'boolean'
        }
    });
};


exports.handler = async argv => {
    const { force, image_dir, processor } = argv;

    console.log(chalk.green("Preparing docker builder image"));
    await builder.buildPackageImage();
   
};