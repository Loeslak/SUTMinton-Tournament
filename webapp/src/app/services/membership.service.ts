import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Membership } from '../interfaces/membership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  http=inject(HttpClient);
  constructor() { }

  getMemberships(){
    return this.http.get<Membership[]>('http://localhost:3000/membership');
  }

  getMembershipById(id:string){
    return this.http.get<Membership>('http://localhost:3000/membership/' + id);
  }

  addMembership(tier:string, duration:number, price:number, tourFee:number){
    return this.http.post('http://localhost:3000/membership',{
      tier: tier,
      duration: duration,
      price: price,
      tourFee: tourFee,
    });
  }

  updateMembership(id:string, tier:string, duration:number, price:number, tourFee:number){
    return this.http.put('http://localhost:3000/membership/'+id,{
      tier: tier,
      duration: duration,
      price: price,
      tourFee: tourFee,
    });
  }

  deleteMembershipById(id:string){
    return this.http.delete('http://localhost:3000/membership/' + id);
  }
}
