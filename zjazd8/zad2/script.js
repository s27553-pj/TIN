$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/albums", function (albums) {
       showAlbums(albums);
    });
    function showAlbums(albums) {
        const galleryList = $("#galleryList");
        albums.forEach(function (album) {
            const albumElement = $(`<div class='gallery-item' data-album-id='${album.id}'></div>`);
            albumElement.text(album.title);
            albumElement.click(function () {
                showGallery(album.id, album.title);
            });
            galleryList.append(albumElement);
        });
    }
    function showGallery(albumId, albumTitle) {
        $.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function (photos) {
            const galleryDetails = $("#galleryDetails");
            galleryDetails.empty();

            const galleryDescription = $(`<div class='gallery-description'></div>`);
            galleryDescription.text(`Gallery: ${albumTitle}`);
            galleryDetails.append(galleryDescription);

            photos.forEach(function (photo) {
                const photoElement = $(`<a href="${photo.url}" data-lightbox="gallery" data-title="${photo.title}"><img src="${photo.thumbnailUrl}" alt="${photo.title}" class="gallery-photo"></a>`);
                galleryDetails.append(photoElement);
            });

            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true
            });
        });
    }
});
