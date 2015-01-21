#!/usr/bin/env node

var fs = require('fs-extra');
var async = require('async');
var exec = require('child_process').exec;
var colors = require('colors');

function doExec(text) {
    return function (done) {
        exec(text, function (err, stdout, stderr) {
            if (stdout) console.log(stdout.grey);
            if (stderr) console.log(stderr.red);
            done(err);
        });
    };
}

// Let's get started
console.log('starting build...'.bgMagenta);

// Clean
fs.removeSync('./platforms');
fs.removeSync('./plugins');

async.series([
    doExec('cordova platform add android'),
    doExec('cordova plugin add org.apache.cordova.contacts')
], function (err) {
    // Done!
    if (err) return console.log('finished build, but there were errors!'.bgMagenta);
    console.log('finished build with no errors.'.bgMagenta);
});


