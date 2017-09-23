import {Component,OnInit} from '@angular/core';
import {Hero} from './hero'
import {HeroService} from './hero.service'
@Component({
selector:'my-dashboard',
templateUrl: './dashboard.component.html',
styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes:Hero[]
    ngOnInit(): void {
        this.getHeroes();
    }
    constructor(private heroService:HeroService){}
   getHeroes(){
    //    this.heroService.getHeroes()
    //    .then(heroes => this.heroes=heroes.slice(1,5));
    //this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes()
    .then(heroes => this.heroes=heroes.slice(1,5))
   }
}