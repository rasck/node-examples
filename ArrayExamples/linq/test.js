const assert = require("assert");
const fruits = () => [
  "apple",
  "orange",
  "melon",
  "apple",
  "apple",
  "cucumber",
  "orange",
  "bannana",
  "apple",
  "apple"
];

describe("Linq", function() {
  describe("where(predicate)", function() {
    it("where is a private function", function() {
      require("./index")();
      assert.throws(() => {
        const apples = where(f => f === "apple", fruits()).toArray();
      }, "ReferenceError: where is not defined");
    });
  });
  describe("where(predicate)", function() {
    it("should return alle strings matching 'apples'", function() {
      require("./index")();
      const apples = fruits()
        .where(f => f === "apple")
        .toArray();
      assert.equal(apples.length, 5);
    });
  });
  describe("where(predicate)", function() {
    it("should be be called 7 times to retrieve 2 items", function() {
      //arrange
      let count = 0;
      numberOfTimesWhereShouldBeCalled = 7;
      let callback = msg => {
        if (msg === "[Function]where has been called") count++;
      };
      require("./index")({ cb: callback });
      // act
      const apples = fruits()
        .where(f => f === "orange")
        .take(2)
        .toArray();
      //assert
      assert.equal(count, numberOfTimesWhereShouldBeCalled);
    });
  });
  describe("select(selector)", function() {
    it("should return an of objects where the name property is the name of the fruit ", function() {
      require("./index")();
      const fruitObjects = fruits()
        .select(f => {
          return { name: f };
        })
        .toArray();
      assert.equal("apple", fruitObjects[0].name);
    });
  });
  describe("first(predicate)", function() {
    it("should return the first element that matches the search criteria (predicate)", function() {
      require("./index")();
      const melon = fruits().first(f => f === "melon");
      assert.equal("melon", melon);
    });
  });
  describe("first(predicate)", function() {
    it("should throw an error if no elements matches the search criteria (predicate)", function() {
      require("./index")();
      assert.throws(() => {
        const fruit = fruits().first(f => f === "grumpy apple");
        assert.equal("grumpy apple", fruit);
      }, "Could not find any element that matched the specified search conditions");
    });
  });
  describe("firstOrDefault(predicate)", function() {
    it("should return null if no elements matches the search criteria (predicate)", function() {
      require("./index")();
      const fruit = fruits().firstOrDefault(f => f === "grumpy apple");
      assert.equal(null, fruit);
    });
  });
  describe("firstOrDefault(predicate)", function() {
    it("should return the first element that matches the search criteria (predicate)", function() {
      require("./index")();
      const fruit = fruits().firstOrDefault(f => f === "orange");
      assert.equal("orange", fruit);
    });
  });
  describe("take(number)", function() {
    it("should return array with the length of 3", function() {
      require("./index")();
      const f = fruits()
        .take(3)
        .toArray();
      assert.equal(3, f.length);
    });
  });
  describe("take(number)", function() {
    it("should return 1 element if number is less than one", function() {
      require("./index")();
      const f = fruits()
        .take(0)
        .toArray();
      assert.equal(1, f.length);
    });
  });
  describe("Chaining calls", function() {
    it("should be possible to chain the linq functions", function() {
      require("./index")();
      let count = 0;
      const apple = fruits()
        .where(f => f === "apple")
        .take(3)
        .select(f => {
          return { id: count++, fruit: f };
        })
        .firstOrDefault(f => f.id === 1);
      assert.equal(1, apple.id);
    });
  });
  describe("Chaining calls", function() {
    it("should result in 10 itertions", function() {
      //arrange
      let count = 0;
      const expectedTotalNumberOfCalls = 10; // 4 * where + 2 * take + 2 * firstOrDefault + 2 * select = 10
      let callback = msg => {
        count++;
        //console.log(msg);
      };
      require("./index")({ cb: callback });
      let idCount = 0;
      //act
      const apple = fruits()
        .where(f => f === "apple")
        .take(3)
        .select(f => {
          return { id: idCount++, fruit: f };
        })
        .firstOrDefault(f => f.id === 1);
      // assert
      assert.equal(count, expectedTotalNumberOfCalls);
    });
  });
  describe("Chaining calls using built in array and custom functions", function() {
    it("should result in 18 iterations", function() {
      //arrange
      let count = 0;
      const expectedTotalNumberOfCalls = 18; // 10 filter + 3 custom take + 3 map + 2 find = 18
      let idCount = 0;
      //act
      const apples = fruits().filter(f => {
        count++;
        return f === "apple";
      }); // where
      const apples2 = [];
      let i = 0;
      while (i < 3) {
        count++;
        apples2.push(apples[i]);
        i++;
      } // take - as custom splice
      const apples3 = apples2
        .map(f => {
          count++;
          return { id: idCount++, fruit: f };
        }) // select
        .find(f => {
          count++;
          return f.id === 1;
        }); // firstOrDefault
      // assert
      assert.equal(count, expectedTotalNumberOfCalls);
    });
  });
});
