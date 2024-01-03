import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocateLeadComponent } from '../locate-lead/locate-lead.component';
import { LeadServiceService } from '../lead-service.service';

@Component({
  selector: 'fundflo-create-lead',
  templateUrl: './create-lead.page.html',
  styleUrls: ['./create-lead.page.scss'],
})
export class CreateLeadPage implements OnInit {
  position = { lat: 21.089270, lng: 79.089928 };

  constructor(
    private leadService: LeadServiceService,
    private modalController: ModalController) { }

  async ngOnInit() {
    this.leadService.current_address
      .subscribe((response: any) => {
        if (response) {
          this.position = response
        }
        else {
          this.position = { lat: 21.089270, lng: 79.089928 };
        }
      });
    this.locateLead();
  }

  async locateLead() {
    const modal = await this.modalController.create({
      component: LocateLeadComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.5, 0.75],
      cssClass: '',
      componentProps: {
        // sort_list: this.sort_list
      }
    });
    modal.onDidDismiss()
      .then((response: any) => {
        console.log(response);

      });
    return await modal.present();
  }
}
