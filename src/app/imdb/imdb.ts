import { Component, OnInit } from '@angular/core';
const APIKEY = '434426fc';
@Component({
    selector: 'app-imdb',
    templateUrl: './imdb.html',
    styleUrls: ['./imdb.css']
})
export class ImdbComponent implements OnInit {
    search = '';
    list = [];
    error = '';
    pgStart = 1;
    pgEnd = 5;
    currentPage = 1;
    totalResults = 0;
    pages = [];
    searchClicked = false;
    searchHistory = [];
    constructor() { }

    ngOnInit() {
    }
    searchMovie() {
        if (this.search) {
            this.searchClicked = true;
            this.fetchMovies();
            this.searchHistory.unshift(this.search);
            this.searchHistory.splice(5);
        }
    }
    onBackClick() {
        this.searchClicked = false;
    }
    onPgChange(page) {
        this.currentPage = page;
        if (page > this.pgStart + 3) {
            this.onNext();
        } else {
            this.onPrev();
        }
    }
    onNext() {
        if (this.pgEnd < this.totalResults - 1) {
            this.pages.shift();
            this.pages.push(++this.pgEnd);
            this.currentPage++;
        }
        this.fetchMovies();
    }
    onPrev() {
        if (this.pgStart > 1) {
            this.pages.pop();
            this.pages.unshift(--this.pgStart);
            this.currentPage--;
        }
        this.fetchMovies();
    }
    fetchMovies() {
        fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${this.search}` + `${this.currentPage && `&page=${this.currentPage}`}`)
            .then((res) => res.json())
            .then(resp => {
                if (resp.Response) {
                    this.pgStart = 1;
                    this.pgEnd = 5;
                    this.totalResults = resp.totalResults;
                    for (let i = this.pgStart; i <= this.pgEnd; i++) {
                        this.pages[i] = i;
                    }
                    this.list = resp.Search;
                } else {
                    this.error = resp.Error;
                    this.list = [];
                }
                Promise.resolve();
            });
    }


}
