import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MembershipService } from '../../../services/membership.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-membership-form',
  standalone: true,
  imports: [FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './membership-form.component.html',
  styleUrl: './membership-form.component.scss'
})
export class MembershipFormComponent {
  id!:string;
  tier!:string;
  duration!:number;
  price!:number;
  tourFee!:number;

  membershipService=inject(MembershipService);

  router=inject(Router);
  route=inject(ActivatedRoute);

  isEdit=false;

  ngOnInit(){
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    if(this.id){
      this.isEdit = true;
      this.membershipService.getMembershipById(this.id).subscribe((result:any) => {
        console.log(result);
        this.tier=result.tier;
        this.duration=result.duration;
        this.price=result.price;
        this.tourFee=result.tourFee;
      });
    }
  }
  add(){
    console.log('Form Submitted:', { tier:this.tier, duration:this.duration, price:this.price, tourFee:this.tourFee });
    this.membershipService.addMembership(this.tier, this.duration, this.price, this.tourFee).subscribe((result:any) =>{
      alert("New Membership added.");
      this.router.navigateByUrl("/admin/memberships");
    });
  }
  update(){
    console.log('Form Submitted:', { tier:this.tier, duration:this.duration, price:this.price, tourFee:this.tourFee });
    this.membershipService.updateMembership(this.id, this.tier, this.duration, this.price, this.tourFee).subscribe((result:any) =>{
      alert("Membership updated.");
      this.router.navigateByUrl("/admin/memberships");
    });
  }
}
