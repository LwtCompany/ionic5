import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./sides/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./sides/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./sides/rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'acount',
    loadChildren: () => import('./sides/acount/acount.module').then( m => m.AcountPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./sides/share/share.module').then( m => m.SharePageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
