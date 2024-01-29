import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartphoneService } from '../smartphone.service';
import { SmartPhone } from '../SmartPhone';

@Component({
  selector: 'app-edit-smartphone',
  templateUrl: './edit-smartphone.component.html',
  styleUrls: ['./edit-smartphone.component.css']
})
export class EditSmartphoneComponent implements OnInit {
  editSmartphoneForm: FormGroup;
  smartphoneId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) {
    this.editSmartphoneForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      image: ['', Validators.required],
      video: ['', Validators.required]
    });
  }
   idParamP: number | null = null; // Inicijalizujte sa null

  ngOnInit() {
    // Dohvatite ID mobilnog telefona iz URL-a
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.idParamP = +idParam; // Pretvorite u broj
      this.smartphoneId = +idParam;

      // Dohvatite podatke o mobilnom telefonu sa servera
      this.smartphoneService.getOneByID(this.smartphoneId).subscribe(smartphone => {
        this.editSmartphoneForm.patchValue({
          brand: smartphone.brand,
          model: smartphone.model,
          image: smartphone.image,
          video: smartphone.video
        });
      });
    } else {
      // Ovde možete rukovati situacijom kada 'id' parametar nije prisutan u URL-u
      // Na primer, možete preusmeriti na stranicu sa porukom o grešci ili preusmeriti na listu mobilnih telefona.
    }
  }

  onSubmit() {
    const brand = this.editSmartphoneForm?.get('brand')?.value;
    const model = this.editSmartphoneForm?.get('model')?.value;
    const image = this.editSmartphoneForm?.get('image')?.value;
    const video = this.editSmartphoneForm?.get('video')?.value;
  
    if (brand !== null && model !== null && image !== null && video !== null) {
      // Proverite da li je idParamP broj pre nego što ga upotrebite
      if (typeof this.idParamP === 'number') {
        const newSmartphone: SmartPhone = {
          id: this.idParamP,
          brand: brand,
          model: model,
          image: image,
          video: video
        };
        this.smartphoneService.updateSmartphone(newSmartphone).subscribe((response) => {
          if (this.editSmartphoneForm) {
            this.editSmartphoneForm.reset();
          }
        });
      } else {
        // Ovde možete rukovati situacijom kada 'idParamP' nije broj
        // Na primer, možete prikazati poruku o grešci korisniku.
        console.error('idParamP nije broj.');
      }
    }
  }
  
}
