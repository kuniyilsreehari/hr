import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(private router:Router){}

ngOnInit(): void {
  
}

formone(){
  console.log('ssss')
  this.router.navigate(['formone'])
}

formtwo(){
  console.log('ssss222')
  this.router.navigate(['formtwo'])
}

formthree(){
  console.log('ssss33')
  this.router.navigate(['formthree'])
}
}
