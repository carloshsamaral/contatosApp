import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { UserAuthComponent } from './components/pages/user-auth/user-auth.component';
import { UserCreateComponent } from './components/pages/user-create/user-create.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'pages/user-create', component:UserCreateComponent},
  { path:'pages/user-auth', component:UserAuthComponent},
  { path:'erros/not-found', component:NotFoundComponent},
  { path:'', pathMatch: 'full', redirectTo:'pages/user-auth'},
  { path:'**', redirectTo:'/erros/not-found'}
];
