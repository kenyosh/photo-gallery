document.addEventListener("DOMContentLoaded", () => {
  fetch("data/albums.json")
    .then(response => response.json())
    .then(albums => {
      const container = document.getElementById("Homepage-albums");

      // Filter for featured albums
      const featuredAlbums = albums.filter(album => album.tags.includes("Homepage"));

      featuredAlbums.forEach(album => {
        // Create a link that wraps the entire album preview
        const albumLink = document.createElement("a");
        albumLink.href = `pages/Obon23Gallery.html?album=${album.folder}`;
        albumLink.className = "album-preview";

        // Add image and title inside the link
        albumLink.innerHTML = `
          <img src="${album.folder}/${album.cover}" alt="${album.title}" />
          <h3>${album.title}</h3>
        `;

        container.appendChild(albumLink);
      });
    })
    .catch(error => {
      console.error("Error loading albums:", error);
    });
});
