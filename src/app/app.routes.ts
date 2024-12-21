import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { DevelopersComponent } from './modules/developers/developers.component';
import { DocumentacionComponent } from './modules/documentacion/documentacion.component';
import { IntroduccionComponent } from './modules/Linux/introduccion/introduccion.component';
import { Actividad01LinuxComponent } from './modules/Linux/actividad01-linux/actividad01-linux.component';
import { DocumentacionLinuxComponent } from './modules/Linux/documentacion-linux/documentacion-linux.component';
import { Documentacion01LinuxComponent } from './modules/Linux/documentacion01-linux/documentacion01-linux.component';
import { Actividad02LinuxComponent } from './modules/Linux/actividad02-linux/actividad02-linux.component';
import { Actividad03LinuxComponent } from './modules/Linux/actividad03-linux/actividad03-linux.component';
import { Actividad04LinuxComponent } from './modules/Linux/actividad04-linux/actividad04-linux.component';
import { Actividad05LinuxComponent } from './modules/Linux/actividad05-linux/actividad05-linux.component';
import { Actividad06LinuxComponent } from './modules/Linux/actividad06-linux/actividad06-linux.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { IntroductionAlgoritmsComponent } from './modules/C++/introduction-algoritms/introduction-algoritms.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'developers', component: DevelopersComponent},
    { path: 'documentation', component:DocumentacionComponent },
    //Linux
    { path: 'introduccion/linux', component: IntroduccionComponent},
    //C++
    { path: 'introduction/c++', component: IntroductionAlgoritmsComponent},
    //actividades
    { path: 'actividad/linux/id=1', component: Actividad01LinuxComponent },
    { path: 'actividad/linux/id=2', component: Actividad02LinuxComponent },
    { path: 'actividad/linux/id=3', component: Actividad03LinuxComponent },
    { path: 'actividad/linux/id=4', component: Actividad04LinuxComponent },
    { path: 'actividad/linux/id=5', component: Actividad05LinuxComponent },
    { path: 'actividad/linux/id=6', component: Actividad06LinuxComponent },
    //documentación
    { path: 'documentacion/linux/id=1', component: DocumentacionLinuxComponent },
    { path: 'documentacion/linux/id=2', component: Documentacion01LinuxComponent },
    { path: '**', component: NotfoundComponent }
];
