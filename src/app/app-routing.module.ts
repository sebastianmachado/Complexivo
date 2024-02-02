import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutingModule } from './main/components/components-routing.module';

const routes: Routes = [         
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    //{ path: '**', component: NotFoundComponent },
    
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
