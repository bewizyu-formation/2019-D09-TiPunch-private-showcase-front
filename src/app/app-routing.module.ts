import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainWithBannerComponent } from './components/main-with-banner/main-with-banner.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSignComponent } from './components/header-sign/header-sign.component';

export const ROUTES: Routes = [
  { 
    path:'', 
    component: AppComponent,
    children: [
      {
        path:'',
        component: HeaderComponent,
        outlet: 'header',
        children: [
          {
            path:'',
            component: HeaderSignComponent
          }
        ],
        data: {title: "Private Showcase"}
      },
      {
        path:'',
        component: MainWithBannerComponent,
        children: [
          {
            path:'',
            component: WelcomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
