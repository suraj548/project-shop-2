import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/bills.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public bs:BillsService) { }

  ngOnInit(): void {
  }

}
