import { HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HttpMessageService{

    private httpResponseManager: BehaviorSubject<HttpResponseBase> = new BehaviorSubject(null);
    private httpResponseState: HttpResponseBase;

    httpResponse: Observable<HttpResponseBase>;

    constructor(){
        this.httpResponse = this.httpResponseManager.asObservable();
    }

    private emitHttpResponseState(){
        this.httpResponseManager.next(this.httpResponseState);
    }

    setHttpResponseState(httpResponse: HttpResponseBase): void{
        this.httpResponseState = httpResponse;
        this.emitHttpResponseState();
    }

}