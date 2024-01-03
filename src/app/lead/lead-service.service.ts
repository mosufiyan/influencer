import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {
  current_address = new BehaviorSubject<any>(null);
  constructor() { }


  updateAddress(address: any) {
    this.current_address.next(address);
  }
}
