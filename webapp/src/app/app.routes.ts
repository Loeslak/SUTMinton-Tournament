import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MembershipsComponent } from './components/manage/memberships/memberships.component';
import { MembershipFormComponent } from './components/manage/membership-form/membership-form.component';
import { SidebarOrganComponent } from './components/organize/sidebar-organ/sidebar-organ.component';
import { MyTournamentComponent } from './components/organize/my-tournament/my-tournament.component';
import { CreateTournamentComponent } from './components/organize/create-tournament/create-tournament.component';

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
    {
        path:"sidebarOrgan",
        component:SidebarOrganComponent,
    },
    {
        path:"organize/my-tournament",
        component:MyTournamentComponent,
    },
    {
        path:"organize/create-tournament",
        component:CreateTournamentComponent,
    },
];
