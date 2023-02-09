class Movie{
    constructor(name,length,genre){
        this.name = name;
        this.length = length;
        this.genre = genre;
    }
    getData(){
        return this.name+", duration:"+this.length+"min "+", genre:"+this.genre;
        
    }
    getName(){
        return this.name;
    }


    result(){
        var sum = 0;
        for (let i = 0; i < neki.length; i += 1) {
        sum = neki[i] + sum;
        
    }
        return $('#lengthMovies').text(sum);
    }
}