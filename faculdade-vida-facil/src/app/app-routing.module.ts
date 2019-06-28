import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    //{ path: 'store', loadChildren: './store/store.moduleStoreModule' },
    { path: 'products', loadChildren: './products/products.moduleProductsModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.moduleNotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
