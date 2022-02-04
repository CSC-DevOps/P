const chalk = require('chalk');
const pathUtil = require("path");

const builder = require('../lib/builder');

exports.command = 'build';
exports.desc = 'Build virtual machine image';
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
    const { sign, image_dir, processor } = argv;

    console.log( chalk.gray( sign ));
    console.log(chalk.green("Building rootfs"));

    await builder.buildRootfs();

    console.log(chalk.green("Building iso"));
    await builder.packageAsIso();
   
};