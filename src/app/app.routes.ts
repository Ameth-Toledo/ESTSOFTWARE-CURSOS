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
import { IntroduccionHtmlComponent } from './modules/Html/introduccion-html/introduccion-html.component';
import { Actividad01HtmlComponent } from './modules/Html/actividad01-html/actividad01-html.component';
import { Actividad02HtmlComponent } from './modules/Html/actividad02-html/actividad02-html.component';
import { AlgoritmSecondPartComponent } from './modules/C++/algoritm-second-part/algoritm-second-part.component';
import { AlgoritmThirdPartComponent } from './modules/C++/algoritm-third-part/algoritm-third-part.component';
import { AlgoritmQuarterPartComponent } from './modules/C++/algoritm-quarter-part/algoritm-quarter-part.component';
import { AlgoritmFifthPartComponent } from './modules/C++/algoritm-fifth-part/algoritm-fifth-part.component';
import { IntroduccionAwsComponent } from './modules/AWS/introduccion-aws/introduccion-aws.component';
import { Actividad01DespligueFrontendAwsComponent } from './modules/AWS-FrontEnd/actividad01-despligue-frontend-aws/actividad01-despligue-frontend-aws.component';
import { Actividad02DespligueFrontendAwsComponent } from './modules/AWS-FrontEnd/actividad02-despligue-frontend-aws/actividad02-despligue-frontend-aws.component';
import { IntroduccionJavaComponent } from './modules/Java/introduccion-java/introduccion-java.component';

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
    //actividades
    { path: 'actividad/linux/id=1', component: Actividad01LinuxComponent },
    { path: 'actividad/linux/id=2', component: Actividad02LinuxComponent },
    { path: 'actividad/linux/id=3', component: Actividad03LinuxComponent },
    { path: 'actividad/linux/id=4', component: Actividad04LinuxComponent },
    { path: 'actividad/linux/id=5', component: Actividad05LinuxComponent },
    { path: 'actividad/linux/id=6', component: Actividad06LinuxComponent },
    //html
    { path: 'introduccion/html', component: IntroduccionHtmlComponent },
    { path: 'actividad/html/id=1', component: Actividad01HtmlComponent },
    { path: 'actividad/html/id=2', component: Actividad02HtmlComponent },
    //documentación
    { path: 'documentacion/linux/id=1', component: DocumentacionLinuxComponent },
    { path: 'documentacion/linux/id=2', component: Documentacion01LinuxComponent },
    //C++
    { path: 'introduction/c++', component: IntroductionAlgoritmsComponent},
    //Actividades
    { path: 'actividad/c++/id=1', component: AlgoritmSecondPartComponent },
    { path: 'actividad/c++/id=2', component: AlgoritmThirdPartComponent },
    { path: 'actividad/c++/id=3', component: AlgoritmQuarterPartComponent },
    { path: 'actividad/c++/id=4', component: AlgoritmFifthPartComponent },
    //AWS
    { path: 'introduccion/aws', component: IntroduccionAwsComponent },
    //Despliegue FrontEnd AWS
    { path: 'despliegue-front-aws/id=1', component: Actividad01DespligueFrontendAwsComponent },
    { path: 'despliegue-front-aws/id=2', component: Actividad02DespligueFrontendAwsComponent },
    //Java
    {path: 'Introudccion-Java', component: IntroduccionJavaComponent},
    { path: '**', component: NotfoundComponent }
];
