var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: (photoObj) => {
        return ['https://farm',
            photoObj.farm, '.staticflickr.com/', 
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },
    transformPhotoToObj: (photoObj) => {
        return {
            title: photoObj.title,
            url: FlickrFetcher.photoObjToURL(photoObj)
        };
    },
    fetchFlickrData: (apiKey, fetch) => {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
            + apiKey + '&text=pugs&format=json&nojsoncallback=1';
        return fetch(url)
    },
    fetchPhotos: (apiKey, fetch) => {
        return FlickrFetcher.fetchFlickrData(apiKey, fetch).then((data) => {
            return data.photos.photo.map(FlickrFetcher.transformPhotoToObj);
        })
    }
};

module.exports = FlickrFetcher;