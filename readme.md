## Using NPM and Yarn to install dependencies(terminal):
```console
$ npm install yarn;
$ yarn install;
```

## About using Jest
- [ ] 1. Create a folder. Inside of the folder,
- [ ] 2. Create a '.js' file for the function(s), and a separate '.test.js' file for the test(s).
- [ ] 3. Export the function(s) from the .js file and import them into the test(s) file.
- [ ] 4. Write the test(s).  This is the most basic format and methods for the test(s). For more, refer to [this folder as an example](../toy-problems/balanced-binary-tree) or visit https://jestjs.io/docs/using-matchers
```js
    describe('general description of the function goes here', () => {
      it('description of the FIRST specific case being tested goes here', () => {
        expect(someFuncWeTesting(testInput1)).toBe(expectedOutput1);
      });
      it('description of the SECOND specific case being tested goes here', () => {
        expect(someFuncWeTesting(testInput2)).toBe(expectedOutput2);
      });
      ...
      it('description of the Nth specific case being tested goes here', () => {
        expect(someFuncWeTesting(testInputN)).toBe(expectedOutputN);
      });
    });
```
#### Jest Commands - more tests will take longer to run.

Commmand | Description
-|-
$ yarn jest; | Executes **ALL** jest files in the REPO (can take longer if there are many tests)
$ yarn jest aSpecificTestFile.test.js; | Executes a specific jest **FILE** ***OR*** all jest files in a specific **FOLDER**
