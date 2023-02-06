# How to run my test scenario

- run npm init to initiate new project
- add file intro.js that contains test function sum
- add export at intro.js file using module.export ={sum}
- run npm i jest to install Jest,new folder node_models should be created (do not forget to exclude this folder in gitignore file before commit)
- created new file with name (test or spec) which contains test case for sum function
- import function sum in created file using 'require' for this
- use global function test (). Second parameter callBack function
- use expect () to specify expectetion from your test function with different matchers (toBe and etc)
- run npm test to check your tests

# What been cover in this test

> In order to measer test coverage should be install plagin npm install --save-dev babel-plugin-istanbul
> This plugin will help to create report about test coverage
> metric code coverage helps to check if the test covers all the code lines and conditions
> Test coverage only valid for sucess test cases
> I have 100% test coverage for my intro.js file
> brances shows if the all conditiona in code covered
> Lines if all the line in code covers
> Function -function coverage
> Statements - average of 3 above
> If there are some uncovered lines will see those in Uncovered Lines with number of lines
