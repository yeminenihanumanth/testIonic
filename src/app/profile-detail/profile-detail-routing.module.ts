import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDetailPage } from './profile-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDetailPageRoutingModule {}
