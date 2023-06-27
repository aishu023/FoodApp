import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantDto } from '../restaurant-dto';
import { RestaurantserviceOperationsService } from '../restaurantservice-operations.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  __restaurantService:RestaurantserviceOperationsService;
  router:Router;

  allRestaurants:RestaurantDto[]=[];
 
  showStatus:boolean=false;

  constructor(restaurantService:RestaurantserviceOperationsService,router:Router){
    this.__restaurantService=restaurantService;
    this.router=router;
  }

  addItem(restaurantId:number)
  {
    localStorage.removeItem('restaurantId');
    localStorage.setItem('restaurantId',restaurantId+'');
    this.router.navigate(['launchitems']);
  }
  

  viewAllRestaurants(){
    this.__restaurantService.getAllRestaurants().subscribe(
       data=>{
        console.log("data:-"+data);
        this.allRestaurants=data;
        
       },err=>{
        console.log("error from spring",err);
        
       }
    )
  }

}
