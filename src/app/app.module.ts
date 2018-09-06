import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel.component';
// import { AdminModule } from './admin/admin.module';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthGuard } from './auth-guard.service';
// import { AdminRoutingModule } from './admin/admin-routing.module';

const appRoutes: Routes = [
  { path: 'admin-panel', component: AdminPanelComponent, canLoad: [AuthGuard]},
  { path: 'home', component:  HomePanelComponent},
  // { path: 'login', component: LoginRoutingModule},
  { path: '', redirectTo : '/home', pathMatch:'full'}
  /* These are examples  */
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    VoteFormComponent,
    AdminPanelComponent,
    HomePanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    // LoginComponent,
    LoginRoutingModule,
    // AdminRoutingModule,
    // AdminModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
