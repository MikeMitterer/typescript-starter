"use strict";
exports.__esModule = true;
var shelljs_1 = require("shelljs");
var make = require("shelljs/make");
// import * as fs from "fs";
var child = require("child_process");
var path = require("path");
var semver = require("semver");
var rp = function (relPath) { return path.join(__dirname, relPath); };
var fail = function (message) {
    console.error("ERROR: " + message);
    shelljs_1.exit(1);
};
var buildPath = path.join(__dirname, "_build");
var testPath = path.join(__dirname, "test");
var enforceMinimumVersions = function () {
    // enforce minimum Node version
    var minimumNodeVersion = "4.8.6";
    var currentNodeVersion = process.versions.node;
    if (semver.lt(currentNodeVersion, minimumNodeVersion)) {
        fail("requires node >= " + minimumNodeVersion + ".  installed: " + currentNodeVersion);
    }
    // enforce minimum npm version
    // NOTE: We are enforcing this version of npm because we use package-lock.json
    var minimumNpmVersion = "5.5.1";
    var currentNpmVersion = child.execSync("npm -v", { encoding: "utf-8" });
    if (semver.lt(currentNpmVersion, minimumNpmVersion)) {
        fail("requires npm >= " + minimumNpmVersion + ".  installed: " + currentNpmVersion);
    }
};
var run = function (cl) {
    try {
        console.log("> " + cl);
        var rc = shelljs_1.exec(cl).code;
        if (rc !== 0) {
            shelljs_1.echo("Exec failed with rc " + rc);
            shelljs_1.exit(rc);
        }
    }
    catch (err) {
        shelljs_1.echo(err.message);
        shelljs_1.exit(1);
    }
};
make.target.clean = function () {
    shelljs_1.rm("-Rf", buildPath);
};
make.target.build = function () {
    enforceMinimumVersions();
    run(path.join(__dirname, "node_modules/.bin/tsc") + " --outDir " + buildPath);
    shelljs_1.cp("-Rf", rp("lib/opensource"), buildPath);
    shelljs_1.cp(rp("LICENSE"), buildPath);
    shelljs_1.cp(rp("package.json"), buildPath);
    shelljs_1.cp(rp("package-lock.json"), buildPath);
    shelljs_1.cp(rp("README.md"), buildPath);
    shelljs_1.cp(rp("ThirdPartyNotice.txt"), buildPath);
};
make.target.units = function () {
    make.target.build();
    // install the just built lib into the test proj
    shelljs_1.pushd("test");
    run("npm install ../_build");
    shelljs_1.popd();
    console.log("-------Unit Tests-------");
    run("tsc -p ./test/units");
    run("mocha test/units");
};
make.target.test = function () {
    // install the just built lib into the test proj
    make.target.units();
    console.log("-------Other Tests-------");
    run("tsc -p ./test/tests");
    run("mocha test/tests");
};
// Deprecated since we automatically build in units before testing, keeping for back compat
make.target.buildtest = function () {
    make.target.test();
};
make.target.samples = function () {
    shelljs_1.pushd("samples");
    run("npm install ../_build");
    run("tsc");
    run("node samples.js");
    run("npm install");
    run("npm start");
    shelljs_1.popd();
    console.log("done");
};
make.target.validate = function () {
    make.target.test();
    make.target.samples();
};
