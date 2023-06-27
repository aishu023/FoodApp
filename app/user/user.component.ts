import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemDto } from '../item-dto';
import { Restaurant } from '../restaurant';
import { RestaurantDto } from '../restaurant-dto';
import { RestaurantserviceOperationsService } from '../restaurantservice-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  
  __restaurantService:RestaurantserviceOperationsService;
  router:Router;

  allRestaurants:RestaurantDto[]=[];
  restaurants:Restaurant[]=[];
  items:ItemDto[]=[];
  allItems:Item[]=[];
 
 

  constructor(restaurantService:RestaurantserviceOperationsService,router:Router,private http: HttpClient){
    this.__restaurantService=restaurantService;
   
    this.router=router;
  }

  viewDetailsofItems()
  {
    
    this.router.navigate(['viewItems']);
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

  viewAllRestuarantsByCity(city:string){
    this.__restaurantService.getAllRestaurantsByCity(city).subscribe(
      data=>{
       console.log("data:-"+data);
       this.allRestaurants=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )

  }

  viewAllRestuarantsByState(state:string){
    this.__restaurantService.getAllRestaurantsByState(state).subscribe(
      data=>{
       console.log("data:-"+data);
       this.allRestaurants=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )

  }

  viewAllRestuarantsByName(name:string){
    this.__restaurantService.getAllRestaurantsByName(name).subscribe(
      data=>{
       console.log("data:-"+data);
       this.restaurants=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )
 
    }

    addReview(){
      this.router.navigate(['/review']);
    }

    
    viewItems(){
      this.router.navigate(['/viewItem']);
    }

    viewReview(){
      this.router.navigate(['/viewreview']);
    }
  
}