const dictionary = {
  "example": "A representative form or pattern.",
  "technology": "The application of scientific knowledge for practical purposes.",
  "engineering": "The application of scientific and mathematical principles to solve problems.",
  "software": "The programs and other operating information used by a computer."
  // Add more words and definitions here
};

function searchWord() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const wordTitle = document.getElementById("wordTitle");
  const wordDefinition = document.getElementById("wordDefinition");
  const definitionContainer = document.getElementById("definitionContainer");

  if (input in dictionary) {
    wordTitle.textContent = input.charAt(0).toUpperCase() + input.slice(1);
    wordDefinition.textContent = dictionary[input];
    definitionContainer.style.display = "block";
  } else {
    definitionContainer.style.display = "none";
  }
}
