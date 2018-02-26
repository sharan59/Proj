import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { HomPagComponent } from './hom-pag/hom-pag.component';
import { LogFormComponent } from './log-form/log-form.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PayFormComponent } from './pay-form/pay-form.component';
import { ExpComponent } from './exp/exp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { CategoryPipe } from './category.pipe';
import { OrderByPipe } from './order-by.pipe';
import { JavconComponent } from './javcon/javcon.component';
import { MeancComponent } from './meanc/meanc.component';
import { InsertcourseComponent } from './insertcourse/insertcourse.component';



@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    HomPagComponent,
    LogFormComponent,
    MainHomeComponent,
    ContactPageComponent,
    AboutPageComponent,
    PayFormComponent,
    ExpComponent,
    PageNotFoundComponent,
  
    CategoryPipe,
    OrderByPipe,
    JavconComponent,
    MeancComponent,
    InsertcourseComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
    RouterModule.forRoot([{path:'api/login',component:LogFormComponent},
                          {path:'api/signup',component:RegFormComponent},
                          {path:'contactus',component:ContactPageComponent},
                          {path:'aboutus',component:AboutPageComponent},
                          {path:'home',component:MainHomeComponent},
                          {path:'courseselection',component:HomPagComponent,
                          children :[{path:'jav',component:JavconComponent},{path:'mea',component:MeancComponent},
                        ]},
                          {path:'insertcourse',component:InsertcourseComponent},
                          {path:'payment',component:ExpComponent},
                         {path:'',redirectTo:'home',pathMatch:'full'},
                          { path: '**', component: PageNotFoundComponent } ])
                          // {path:'kk',component:AppComponent},
                          // {path:'',redirectTo:'home',pathMatch:'full'},
                          // {path:'**',redirectTo:'404'},
                          // {path:'404',component:PageNotFoundComponent}, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 




}
