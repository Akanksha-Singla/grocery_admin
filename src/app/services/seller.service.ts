import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ISeller ,IAllSellerResponses} from '../models/seller';



@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrlGetAllSellers = environment.apiEndpoint + 'admin/getAllSellers'
  constructor(private http:HttpClient) { }

 getSeller(): Observable<IAllSellerResponses> {
// console.log(admin)
    return this.http.get<IAllSellerResponses>(this.baseUrlGetAllSellers);
  }



}
