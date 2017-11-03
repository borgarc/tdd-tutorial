var expect = require('chai').expect;
var PhotoLister = require('./photo-lister');

describe('PhotoLister', () => {
    it('should exist', () => {
        expect(PhotoLister).not.to.be.undefined;
    });
});

describe('photoToListItem', () => {
    it('should take a photo object and return a list item string', () => {
        var input = {
            title: 'This is a test',
            url: 'http://loremflickr.com/960/593'
        },
            expected = '<li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
                + '<figcaption>This is a test</figcaption></figure></li>';
            expect(PhotoLister.photoToListItem(input)).to.equal(expected);

        input = {
            title: 'This is another test',
            url: 'http://loremflickr.com/960/593/puppy'
        }
        expected = '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
                 + '<figcaption>This is another test</figcaption></figure></li>';
        expect(PhotoLister.photoToListItem(input)).to.equal(expected);
    });
});

describe('photoListToHTML()', () => {
    it('should take an array of photo objects and convert them to an HTML list', () => {
        var input = [{
            title: 'This is a test',
            url: 'http://loremflickr.com/960/593'
        },
        {
            title: 'This is another test',
            url: 'http://loremflickr.com/960/593/puppy'
        }]
        expected = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
                     + '<figcaption>This is a test</figcaption></figure></li>'
                     + '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
                     + '<figcaption>This is another test</figcaption></figure></li></ul>';
        expect(PhotoLister.photoListToHTML(input)).to.equal(expected);
    })
});