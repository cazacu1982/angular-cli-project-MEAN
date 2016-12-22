import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(public http: Http) { }

  getPets(): Observable<any> {
    return this.http.get('http://localhost:3000/pets').map(res => res.json());
  }

  addPet(pet): Observable<any> {
    return this.http.post("http://localhost:3000/pet", JSON.stringify(pet), this.options);
  }

  editPet(pet): Observable<any> {
    return this.http.put(`http://localhost:3000/pet/${pet._id}`, JSON.stringify(pet), this.options);
  }

  deletePet(pet): Observable<any> {
    return this.http.delete(`http://localhost:3000/pet/${pet._id}`, this.options);
  }

}
