var PhotoLister;

PhotoLister = {
    photoToListItem: (photoObj) => {
        return [
            '<li><figure><img src="',
            photoObj.url, '" alt=""/>',
            '<figcaption>',
            photoObj.title ,
            '</figcaption></figure></li>'
        ].join('');
    },
    photoListToHTML: function(photos) {
        return '<ul>' + photos.map(PhotoLister.photoToListItem).join('') + '</ul>';
    }
};

module.exports = PhotoLister;