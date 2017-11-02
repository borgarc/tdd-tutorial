'use strict';

var expect = require(chai).expect;
var FlickrFetcher = require('./flickr-fetcher.js');

describe('FlickrFetcher', () => {
    it('should exist', () => {
        expect(FlickrFetcher).to.not.be.undefined;
    });
});