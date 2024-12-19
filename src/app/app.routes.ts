import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { DevelopersComponent } from './modules/developers/developers.component';
import { DocumentacionComponent } from './modules/documentacion/documentacion.component';
import { IntroduccionComponent } from './modules/Linux/introduccion/introduccion.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'developers', component: DevelopersComponent},
    { path: 'documentation', component:DocumentacionComponent },
    //Linux
    { path: 'introduccion/linux', component: IntroduccionComponent}
];
