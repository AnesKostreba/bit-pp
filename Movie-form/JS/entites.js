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
        for (let i = 0; i < niz.length; i += 1) {
        sum = niz[i] + sum;
    }
        return $('#lengthMovies').text(sum);
    }
}


class Program{
    constructor(date,counter,length);
}