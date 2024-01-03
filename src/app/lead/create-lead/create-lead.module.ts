import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLeadPageRoutingModule } from './create-lead-routing.module';

import { CreateLeadPage } from './create-lead.page';
import { LocateLeadComponent } from '../locate-lead/locate-lead.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule } from '../../shared/google-places/ngx-google-places-autocomplete';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLeadPageRoutingModule,
    GoogleMapsModule,
    GooglePlaceModule,

  ],
  declarations: [CreateLeadPage,LocateLeadComponent]
})
export class CreateLeadPageModule {}
