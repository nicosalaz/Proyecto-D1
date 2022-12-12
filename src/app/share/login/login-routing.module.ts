import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterClientComponent } from './register-client/register-client.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
