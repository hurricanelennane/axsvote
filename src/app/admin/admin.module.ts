import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 
import { AdminComponent }           from './admin.component';
import { AdminPanelComponent }  from './admin-panel.component';
// import { ManageCrisesComponent }    from './manage-crises.component';
// import { ManageHeroesComponent }    from './manage-heroes.component';
 
import { AdminRoutingModule }       from './admin-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminPanelComponent
    // AdminModule
  ]
})
export class AdminModule{}