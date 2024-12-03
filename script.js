function searchWord() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const wordTitle = document.getElementById("wordTitle");
  const wordDefinition = document.getElementById("wordDefinition");
  const definitionContainer = document.getElementById("definitionContainer");

  fetch(`/word/${input}`)
    .then(response => response.json())
    .then(data => {
      wordTitle.textContent = data.word.charAt(0).toUpperCase() + data.word.slice(1);
      wordDefinition.textContent = data.definition;
      definitionContainer.style.display = "block";
    })
    .catch(() => {
      definitionContainer.style.display = "none";
    });
}
