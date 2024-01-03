import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from '../../shared/google-places/ngx-google-places-autocomplete.directive';
import { ComponentRestrictions } from '../../shared/google-places/objects/options/componentRestrictions';
import { Address } from '../../shared/google-places/objects/address';
import { LeadServiceService } from '../lead-service.service';

declare const google: any;
@Component({
  selector: 'fundflo-locate-lead',
  templateUrl: './locate-lead.component.html',
  styleUrls: ['./locate-lead.component.scss'],
})
export class LocateLeadComponent implements OnInit {
  constructor(private leadService: LeadServiceService) { }

  @ViewChild("places") places!: GooglePlaceDirective;

  ngOnInit() {
    this.getRestictions();
  }
  onClose() {

  }

  address(address: Address) {
    console.log(address);
    const lat = address.geometry.location.lat();
    const lng = address.geometry.location.lng();
    this.leadService.updateAddress({ lat, lng })
  }

  getRestictions() {
    let country = 'India';
    const _self = this;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: country },
      (results: any, status: any) => {
        if (status == google.maps.GeocoderStatus.OK) {
          const _bounds = results[0].geometry.bounds;
          for (const element of results[0].address_components) {
            if (element.long_name == country) {
              const _country = element.short_name;
              _self.changeConfig(_bounds, _country);
            }
          }
        }
      }
    );
  }

  public changeConfig(bounds: any, country: any) {
    this.places.options.bounds = bounds;
    this.places.options.componentRestrictions = new ComponentRestrictions({
      country: country,
    });
    this.places.reset();
  }
}
