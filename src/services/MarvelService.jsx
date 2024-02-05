import axios from "axios";

class MarvelService {


    static async getAllCharacters(limit) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharacters(page) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters?limit=10&offset=${page}&ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharactersWithOffset(name ,page) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters?limit=10&nameStartsWith=${name}&offset=${page}&ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async searchCharacterByName(name) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters?nameStartsWith=${name}&limit=10&ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getSingleCharacter(id) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters/${id}?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharacterComics(id) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters/${id}/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharacterEvents(id) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters/${id}/events?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharacterSeries(id) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters/${id}/series?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }
    static async getCharacterStories(id) {
        const md5 = require('md5');
        const ts = new Date().getTime();
        const stringtoHash = `${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`
        const hash = md5(stringtoHash)
        const baseUrl = 'https://gateway.marvel.com:443'
        try {
            const response = await axios.get(`${baseUrl}/v1/public/characters/${id}/stories?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash}`);
            this.result = response.data.data.results;
            return this.result
        }            
        catch (error) {
                console.log(error)
            }
    }

        

    }



export default MarvelService