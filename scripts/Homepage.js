document.addEventListener("DOMContentLoaded", () => {
  fetch("data/albums.json")
    .then(response => response.json())
    .then(albums => {
      const container = document.getElementById("Homepage-albums");

      // Filter for featured albums. Use the tool includes("____")
      const featuredAlbums = albums.filter(album => album.tags.includes("Homepage"));

      featuredAlbums.forEach(album => {
        const albumDiv = document.createElement("div");
        albumDiv.className = "album-preview";
        albumDiv.innerHTML = `
          <a href="pages/Obon23Gallery.html?album=${encodeURIComponent(album.folder)}">
          <h3>${album.title}</h3>
          <img src="${album.folder}/${album.cover}" alt="${album.title}" />
        `;
        container.appendChild(albumDiv);
      });
    })
    .catch(error => {
      console.error("Error loading albums:", error);
    });
});


