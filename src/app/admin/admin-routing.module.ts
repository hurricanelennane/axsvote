import { AdminComponent } from "./admin.component";
import { AdminPanelComponent } from "./admin-panel.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth-guard.service";
import { AuthService } from "../auth.service";

const adminRoutes: Routes = [
    {
      path: 'admin',
      component: AdminComponent,
      canActivate:[AuthGuard],
      children: [
        {
          path: '',
          children: [
            { path: '', component: AdminPanelComponent },
            // { path: 'votes', component: ManageVotesComponent }
          ]
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
      AuthGuard,
      AuthService
    ]
  })
  export class AdminRoutingModule {}