var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

// use for...of loop
for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

// use forEach() loop
programmingLanguages.forEach(function (language, index) {
  console.log(`${index + 1}. ${language.toUpperCase()}`);
});

// filter elements by a string
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});
console.log(updatedLanguages);
