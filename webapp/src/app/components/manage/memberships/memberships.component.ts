import { Component, ViewChild, inject } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MembershipService } from '../../../services/membership.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Membership } from '../../../interfaces/membership';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent {
  displayedColumns: string[] = ['id', 'tier', 'duration', 'price', 'tourFee', 'action'];
  dataSource: MatTableDataSource<Membership>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;//กดหลอดไฟแล้วกด Update import from "@angular/core"
  @ViewChild(MatSort) sort!: MatSort;

  membershipService=inject(MembershipService);
  constructor() {

    this.dataSource = new MatTableDataSource([] as any);
  }
  ngOnInit(){
    this.getServerData();
  }
  private getServerData() {
    this.membershipService.getMemberships().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id:string){
    console.log(id);
    this.membershipService.deleteMembershipById(id).subscribe((result:any) => {
      alert("Membership deleted!");
      this.getServerData();
    })
  }
}
