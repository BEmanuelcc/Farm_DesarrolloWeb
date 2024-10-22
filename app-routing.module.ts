import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { EnlaceComponent } from './components/enlace/enlace.component';
import { FacturasComponent } from './components/facturas/facturas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'enlace', component: EnlaceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'medicamentos', component: MainComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: '', redirectTo: '/medicamentos', pathMatch: 'full' } // Redirige al dashboard al iniciar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
