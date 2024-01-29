import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPhone } from '../SmartPhone';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-smartphone-detail',
  templateUrl: './smartphone-detail.component.html',
  styleUrls: ['./smartphone-detail.component.css']
})
export class SmartphoneDetailComponent implements OnInit {
  smartphone: SmartPhone | undefined;

  constructor(
    private route: ActivatedRoute,
    private smartphoneService: SmartphoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.smartphoneService.getOneByID(id).subscribe((data) => {
      this.smartphone = data;
    });
  }

  goBack() {
    this.router.navigate(['/smartphones']);
  }
}
