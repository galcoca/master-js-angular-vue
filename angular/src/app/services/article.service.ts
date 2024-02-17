import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { Global } from "./global";

@Injectable() 
export class ArticleService {

    public templateURL: string;

    constructor(
        private _http: HttpClient
    ) {
        this.templateURL = Global.url;
    }

    getArticles(last:any = null):Observable<any>{
        let articles = 'articles';
        if(last != null){
            articles = 'articles/'+last;
        }
        let APIurl = this.templateURL+articles;
        return this._http.get(APIurl);
    }

    getArticle(articleId:any):Observable<any>{
        let url = 'article/'+articleId;
        let APIurl = this.templateURL+url;
        return this._http.get(APIurl);
    }

    search(searchString:any):Observable<any>{
        let url = 'search/'+searchString;
        let APIurl = this.templateURL+url;
        return this._http.get(APIurl);
    }

    createArticle(article:any):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let url = 'save/'
        let APIurl = this.templateURL+url;
        return this._http.post(APIurl, params, {headers: headers});
    }

    updateArticle(id:string,article:any):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let url = 'article/'+id;
        let APIurl = this.templateURL+url;
        return this._http.put(APIurl, params, {headers: headers});
    }

    deleteArticle(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let url = 'article/'+id;
        let APIurl = this.templateURL+url;
        return this._http.delete(APIurl, {headers: headers});
    }

}