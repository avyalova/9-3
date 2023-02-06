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

- Покрытие функций: сколько объявленных функций было вызвано.
- Покрытие операторов: какая доля содержащихся в программе операторов была выполнена.
- Покрытие веток: сколько выполнено веток контрольной структуры (например, операторов if).
- Покрытие условий: какая доля логических подвыражений была протестирована на истинные и ложные значения.
- Покрытие строк: сколько строк исходного кода протестировано.
