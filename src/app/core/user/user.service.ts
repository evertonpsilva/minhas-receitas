import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user.interface';
import jtw_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Token } from '../token/token.interface';

@Injectable({ providedIn: 'root'})
export class UserService { 

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string= '';

    constructor(
        private tokenService: TokenService,
        private http: HttpClient,
    ) { 
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    login(email: string, password: string) {
        return this.http.post('users/login', { email, password }, { observe: 'response'}).pipe(
            tap(res => {
                const token = res.body as Token;
                this.setToken(token.accessToken)
            })
        );
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.firstName;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}