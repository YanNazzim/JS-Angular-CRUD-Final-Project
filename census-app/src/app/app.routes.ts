import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CensusListComponent } from './census-list/census-list.component';
import { CensusCreateComponent } from './census-create/census-create.component';
import { CensusEditComponent } from './census-edit/census-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/census-list', pathMatch: 'full' }, // Default route redirects to census-list
  { path: 'census-list', component: CensusListComponent },
  { path: 'census-create', component: CensusCreateComponent },
  { path: 'census-edit/:id', component: CensusEditComponent }, // Parameterized route for editing a record
  { path: '**', redirectTo: '/census-list' } // Redirects to census-list for any other unmatched route
];

@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    CensusCreateComponent,
    CensusEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Registering the routes in the root module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
