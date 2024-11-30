import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OutfitsComponent } from './pages/outfits/outfits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './pages/error/error.component';
import { IndividualComponent } from './pages/individual/individual.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'outfits', component:OutfitsComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'individual/:id', component:IndividualComponent}
];
