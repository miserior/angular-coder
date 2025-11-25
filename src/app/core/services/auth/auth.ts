import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { IAuth } from './model/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userUrl = API_URL + '/users';
  user: IAuth | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http.get<IAuth[]>(this.userUrl).subscribe((userd) => {
      const user = userd.find((u) => u.email === email && u.password === password);
      if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
      }
      localStorage.setItem('token', user.email);
      this.user = user;
      this.router.navigate(['/dashboard']);
    });
  }
  logout(): void {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const isAuthenticated = token === this.user?.email;
    console.log(isAuthenticated);

    return isAuthenticated;
  }
}
