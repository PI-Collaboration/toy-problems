About using Yarn instead of NPM
Use 'yarn install' to install/update dependencies.

About using Jest
Command: 'yarn jest' for all jest files, or 'yarn jest /balanced-binary-tree' for a specific folder containing the .js and the jest file.
1. All test MUST be written in a file with a '.test.js' extension
2. All functions must be imported into and used in the tests file
3. This is the most basic format and methods for the tests.  For more, refer to
   toy-problems/balanced-binary-tree/balancedBinaryTree.test.js
   or visit: https://jestjs.io/docs/using-matchers

    describe('general description of the function goes here', () => {
      it('description of the FIRST specific case being tested goes here', () => {
        expect(someFuncWeTesting(input1)).toBe(theExpectedOutputGoesHere);
      });
      it('description of the SECOND specific case being tested goes here', () => {
        expect(someFuncWeTesting(input1)).toBe(theExpectedOutputGoesHere);
      });
      ...
      it('description of the Nth specific case being tested goes here', () => {
        expect(someFuncWeTesting(input1)).toBe(theExpectedOutputGoesHere);
      });
    });

