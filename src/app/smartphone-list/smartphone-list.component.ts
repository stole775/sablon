import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartPhone } from '../SmartPhone';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  smartphones: SmartPhone[] = [];
  searchKeyword: string = '';
  filteredSmartphones: SmartPhone[] = [];

  constructor(private smartphoneService: SmartphoneService, private router: Router) {}

  ngOnInit(): void {
    this.smartphoneService.getAll().subscribe((data) => {
      this.smartphones = data;
      this.filteredSmartphones = data;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/smartphones', id]);
  }

  filterSmartphones() {
    if (!this.searchKeyword) {
      this.filteredSmartphones = this.smartphones;
    } else {
      this.filteredSmartphones = this.smartphones.filter((smartphone) =>
        smartphone.brand.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        smartphone.model.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }
  deleteSmartphone(id: number) {
    // Pozovite servis za brisanje mobilnog telefona
    this.smartphoneService.delete(id).subscribe(() => {
      // Nakon uspešnog brisanja, ažurirajte listu mobilnih telefona
      this.smartphones = this.smartphones.filter(smartphone => smartphone.id !== id);
    });
  }
  editSmartphone(id: number) {
    // Navigirajte na stranicu za ažuriranje mobilnog telefona
    this.router.navigate(['/edit', id]);
  }
  
}
