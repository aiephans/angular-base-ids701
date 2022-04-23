import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  @Output() clickedMe = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickChild(id:number){
    //console.log("Click Child: "+id);
    this.clickedMe.emit(id);
  }

}
