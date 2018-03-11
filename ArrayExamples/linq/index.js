module.exports = options => {
  // Todo: Remove CB and use sinon.assert.callCount(spy, num) from http://sinonjs.org/releases/v4.4.2/assertions/ instead.
  const cb = options ? options.cb : null;

  function* where(predicate, iterable = null) {
    for (const iterator of iterable ? iterable : this) {
      if (cb) cb("[Function]where has been called", iterator);
      if (predicate(iterator)) yield iterator;
    }
  }

  function* take(number, iterable = null) {
    for (const iterator of iterable ? iterable : this) {
      if (cb) cb("[Function]take has been called");
      if (0 < --number) yield iterator;
      else
        // signal done by return keyword
        return yield iterator;
    }
  }

  function* select(selector, iterable = null) {
    for (const iterator of iterable ? iterable : this) {
      if (cb) cb("[Function]select has been called");
      yield selector(iterator);
    }
  }

  function firstOrDefault(predicate, iterable = null) {
    for (const iterator of iterable ? iterable : this) {
      if (cb) cb("[Function]firstOrDefault has been called");
      if (predicate(iterator)) {
        return iterator;
      }
    }
    return null;
  }

  function first(predicate, iterable = null) {
    let count = 0;
    for (const iterator of iterable ? iterable : this) {
      if (cb) cb("[Function]first has been called");
      if (predicate(iterator)) {
        return iterator;
      }
    }
    throw new Error(
      "Could not find any element that matched the specified search conditions"
    );
  }

  function toArray() {
    const arr = [];
    for (const iterator of this) arr.push(iterator);
    return arr;
  }

  //https://stackoverflow.com/questions/38580048/modifying-generator-function-prototype
  const Generator = Object.getPrototypeOf(function*() {});
  const GeneratorFunction = Generator.constructor;
  Generator.prototype.where = where;
  Generator.prototype.take = take;
  Generator.prototype.select = select;
  Generator.prototype.first = first;
  Generator.prototype.firstOrDefault = firstOrDefault;
  Generator.prototype.toArray = toArray;

  Array.prototype.where = function(predicate) {
    return where(predicate, this);
  };
  Array.prototype.take = function(number) {
    // let arr = this[Symbol.iterator]();
    return take(number, this);
  };
  Array.prototype.select = function(selector) {
    return select(selector, this);
  };

  Array.prototype.first = function(predicate) {
    return first(predicate, this);
  };

  Array.prototype.firstOrDefault = function(predicate) {
    return firstOrDefault(predicate, this);
  };
};
