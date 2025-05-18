document.addEventListener("DOMContentLoaded", () => {
  fetch("data/albums.json")
    .then(response => response.json())
    .then(albums => {
      const container = document.getElementById("featured-albums");

      // Filter for featured albums. Use the tool includes("____")
      const featuredAlbums = albums.filter(album => album.tags.includes("featured"));

      featuredAlbums.forEach(album => {
        const albumDiv = document.createElement("div");
        albumDiv.className = "album-preview";
        albumDiv.innerHTML = `
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
