import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-clothes-item',
  templateUrl: './clothes-item.component.html',
  styleUrls: ['./clothes-item.component.css']
})
export class ClothesItemComponent implements OnInit {
  @Input('items') dataReceived = [];
  
  
  showHide = false;
  sub= null;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.activateRoute.queryParams.subscribe(params => {
      console.log(params);
      if(params.data === 'Kurtis'){
        this.dataReceived = this.dataService.kurtiItems;
        console.log(this.dataService);
      }
      // Defaults to 0 if no query param provided.
      // this.page = +params['page'] || 0;
    });
  console.log(this.dataReceived);
  }


  show(obj, propertyName) {
    console.log(obj, propertyName);
    obj[propertyName] = true;
    // this.showHide = true;
  }
  hide(obj, propertyName) {
    obj[propertyName] = false;
    // this.showHide = false;
  }

}
