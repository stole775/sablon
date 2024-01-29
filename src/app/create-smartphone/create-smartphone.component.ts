import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmartPhone } from '../SmartPhone';
import { SmartphoneService } from '../smartphone.service'; // Zamijenite putanju sa stvarnom putanjom do servisa

@Component({
  selector: 'app-create-smartphone',
  templateUrl: './create-smartphone.component.html',
  styleUrls: ['./create-smartphone.component.css']
})
export class CreateSmartphoneComponent {
  smartphoneForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private smartphoneService: SmartphoneService) {
    this.smartphoneForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      image: ['', Validators.required],
      video: ['', Validators.required]
    });
  }

  onSubmit() {
    const brand = this.smartphoneForm?.get('brand')?.value;
  const model = this.smartphoneForm?.get('model')?.value;
  const image = this.smartphoneForm?.get('image')?.value;
  const video = this.smartphoneForm?.get('video')?.value;

  if (brand !== null && model !== null && image !== null && video !== null) {
    const newSmartphone: SmartPhone = {
      id: 0, // Postavite odgovarajući ID, na primer, 0 za novi unos
      brand: brand,
      model: model,
      image: image,
      video: video
    };
    this.smartphoneService.create(newSmartphone).subscribe((response) => {
      if (this.smartphoneForm) {
        this.smartphoneForm.reset();
      }
    });

      // Ovde pozovite servis za kreiranje novog mobilnog telefona
      // this.smartphoneService.create(newSmartphone);

      // Resetujte formu nakon uspešnog kreiranja
      this.smartphoneForm.reset();
    }
  }
}
