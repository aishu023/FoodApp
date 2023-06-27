import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantserviceOperationsService } from '../restaurantservice-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __restaurantService: RestaurantserviceOperationsService;
  status = false;
  message = '';
  r: Restaurant = new Restaurant(0,'', '', '', '', '', '', '', '', '','','');
  r1:Restaurant[]=[];

  constructor(restaurantService: RestaurantserviceOperationsService,private http: HttpClient, private route: ActivatedRoute) {
    this.__restaurantService = restaurantService;
  }

  
 
  onSubmit() {
    console.log(this.r);
    
    this.__restaurantService.submitRestaurant(this.r).subscribe(
      
    
      data=>{
        this.status=true;
        this.message="flight review submitted";

      },
      error=>{

      }

    )

  
  }
}
