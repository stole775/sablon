import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneDetailComponent } from './smartphone-detail/smartphone-detail.component';
import { EditSmartphoneComponent } from './edit-smartphone/edit-smartphone.component';

const routes: Routes = [
  { path: 'smartphones', component: SmartphoneListComponent },
  { path: 'smartphones/:id', component: SmartphoneDetailComponent },
  { path: '', redirectTo: '/smartphones', pathMatch: 'full' },
  { path: 'edit/:id', component: EditSmartphoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
