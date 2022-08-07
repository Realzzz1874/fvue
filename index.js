#!/usr/bin/env node

import fs from "fs";
import { program } from "commander";
import download from "download-git-repo";
import inquirer from "inquirer";
import handlebars from "handlebars";
import ora from "ora";
import chalk from "chalk";
import logSymbols from "log-symbols";

const log = chalk.hex("##1DBD21");
console.log(log("fvue: A fast vue project cli!"));

const TPLS = {
  v3: {
    url: "github:Realzzz1874/v3-tpl#fvue-tpl/v3",
    desc: "v3-tpl",
    repo: "https://github.com/Realzzz1874/v3-tpl/tree/fvue-tpl/v3",
  },
};

program.version("1.0.0");
program
  .command("init <tpl> <proj>")
  .description("init tpl")
  .action((tpl_name, proj_name) => {
    const { url, repo } = TPLS[tpl_name];
    console.log(`github repo: ${repo}`);
    const tpl_loading = ora("tpl downloading...");
    tpl_loading.start();
    download(
      url,
      proj_name,
      {
        clone: true,
      },
      (err) => {
        if (err) {
          tpl_loading.fail();
          console.log(logSymbols.error, chalk.red("tpl download fail."));
        } else {
          tpl_loading.succeed("tpl download success.");
          const log = chalk.hex("#FFA500");
          console.log(logSymbols.success, log("tpl init success."));

          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "please input proj name:",
              },
              {
                type: "input",
                name: "description",
                message: "please input proj description:",
              },
              {
                type: "input",
                name: "author",
                message: "please input proj author:",
              },
            ])
            .then(async (answers) => {
              const package_path = `${proj_name}/package.json`;
              const package_content = fs.readFileSync(package_path, "utf-8");
              const package_result = await handlebars.compile(package_content)(
                answers
              );
              fs.writeFileSync(package_path, package_result);
              const log = chalk.hex("#FFA500");
              console.log(logSymbols.success, log("proj init success."));
            });
        }
      }
    );
  });

program
  .command("list")
  .description("tpl list")
  .action(() => {
    for (let key in TPLS) {
      console.log(`   - ${key} (${TPLS[key].desc})`);
    }
  });
program.parse(process.argv);
