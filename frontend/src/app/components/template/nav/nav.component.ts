import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'

import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HomeComponent,
    ProductCrudComponent,
    RouterModule
  ],

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
