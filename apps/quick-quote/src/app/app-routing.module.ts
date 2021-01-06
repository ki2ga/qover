import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: 'login', loadChildren: () => import('@qover/feature-login').then(m => m.FeatureLoginModule) },
    { path: 'quote', loadChildren: () => import('@qover/feature-quote').then(m => m.FeatureQuoteModule) },
    { path: '', redirectTo: '/quote', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
