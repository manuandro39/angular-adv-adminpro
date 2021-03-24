import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },//Progress
          { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },//Promesas
          { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' } },//Grafica1,
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },//Rxjs,
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajuste de cuenta' } }//Account-settings
        ]
    }
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
