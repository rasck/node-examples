function calcRealAge(gender, age) {
  if (gender === "female") return age + 10;
  return age;
}
module.exports = {
  personApi: {
    getPerson: (age, gender) => {
      return {
        person: {
          Name: "Jane",
          Gender: gender,
          Age: calcRealAge(gender, age)
        }
      };
    }
  }
};
