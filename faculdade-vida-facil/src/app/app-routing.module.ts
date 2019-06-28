import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full'},
    { path: 'store', loadChildren: './store/store.module#StoreModule'},
    { path: 'products', loadChildren: './products/products.module#ProductsModule'},
    { path: 'notfound', loadChildren: './notfound/notfound.module#NotFoundModule'},
    { path: '**', redirectTo: 'notfound'}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
