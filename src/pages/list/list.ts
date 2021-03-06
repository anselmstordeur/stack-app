import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ItemDetailPage} from "../item-detail/item-detail";
import {item, itemList, ListService} from "../../app/list.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  items: itemList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listService: ListService) {

  }

  getList(): void {
    this.listService.getList().then(items => this.items = items);
  }

  addToList(): void {
    this.listService.setItem({
      title: (new Date()).getUTCSeconds().toString(),
      description: 'The description....'
    });
  }

  addBelowItem(item: item): void {
    // redirect to add item page
  }

  removeFromList(title: string): void {
    this.listService.deleteItem(title);
  }

  ngOnInit(): void {
    this.getList();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
