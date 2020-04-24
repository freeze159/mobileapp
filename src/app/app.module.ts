import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeModule } from './_modules/home/home.module';
import { AdminModule } from './_modules/admin/admin.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
const rootRoutes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '', loadChildren: () => HomeModule },
  { path: '**', component: NotFoundComponent }

]
@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(rootRoutes, { scrollPositionRestoration: 'enabled' }),
    HomeModule,
    AdminModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
