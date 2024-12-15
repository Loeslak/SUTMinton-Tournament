import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MembershipsComponent } from './components/manage/memberships/memberships.component';
import { MembershipFormComponent } from './components/manage/membership-form/membership-form.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"admin/memberships",
        component:MembershipsComponent,
    },
    {
        path:"admin/memberships/add",
        component:MembershipFormComponent,
    },
    {
        path:"admin/memberships/:id",
        component:MembershipFormComponent,
    },
];
