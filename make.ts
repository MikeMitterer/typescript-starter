import { cp, echo, exec, exit, popd, pushd, rm } from "shelljs";
import "shelljs/make";

// import * as fs from "fs";
import * as child from "child_process";
import * as path from "path";
import * as semver from "semver";

const rp = (relPath) => path.join(__dirname, relPath);

const fail = (message) => {
  console.error("ERROR: " + message);
  exit(1);
};

const buildPath = path.join(__dirname, "_build");
const testPath = path.join(__dirname, "test");

const target = glob
const enforceMinimumVersions = () => {
  // enforce minimum Node version
  const minimumNodeVersion = "4.8.6";
  const currentNodeVersion = process.versions.node;
  if (semver.lt(currentNodeVersion, minimumNodeVersion)) {
    fail("requires node >= " + minimumNodeVersion + ".  installed: " + currentNodeVersion);
  }

  // enforce minimum npm version
  // NOTE: We are enforcing this version of npm because we use package-lock.json
  const minimumNpmVersion = "5.5.1";
  const currentNpmVersion = child.execSync("npm -v", { encoding: "utf-8" });
  if (semver.lt(currentNpmVersion, minimumNpmVersion)) {
    fail("requires npm >= " + minimumNpmVersion + ".  installed: " + currentNpmVersion);
  }
};

const run = (cl) => {
  try {
    console.log("> " + cl);
    const rc = exec(cl).code;
    if (rc !== 0) {
      echo("Exec failed with rc " + rc);
      exit(rc);
    }
  } catch (err) {
    echo(err.message);
    exit(1);
  }
};

target.clean = () => {
  rm("-Rf", buildPath);
};

make.target.build = () => {
  enforceMinimumVersions();
  run(path.join(__dirname, "node_modules/.bin/tsc") + " --outDir " + buildPath);

  cp("-Rf", rp("lib/opensource"), buildPath);

  cp(rp("LICENSE"), buildPath);
  cp(rp("package.json"), buildPath);
  cp(rp("package-lock.json"), buildPath);
  cp(rp("README.md"), buildPath);
  cp(rp("ThirdPartyNotice.txt"), buildPath);
};

make.target.units = () => {
  make.target.build();
  // install the just built lib into the test proj
  pushd("test");
  run("npm install ../_build");
  popd();

  console.log("-------Unit Tests-------");
  run("tsc -p ./test/units");
  run("mocha test/units");
};

make.target.test = () => {
  // install the just built lib into the test proj
  make.target.units();

  console.log("-------Other Tests-------");
  run("tsc -p ./test/tests");
  run("mocha test/tests");
};

// Deprecated since we automatically build in units before testing, keeping for back compat
make.target.buildtest = () => {
  make.target.test();
};

make.target.samples = () => {
  pushd("samples");
  run("npm install ../_build");
  run("tsc");
  run("node samples.js");
  run("npm install");
  run("npm start");
  popd();
  console.log("done");
};

make.target.validate = () => {
  make.target.test();
  make.target.samples();
};
