import { Injectable } from "@angular/core";
import { listMock } from "./listMock";
import { Storage } from '@ionic/storage';

export type item = {title: string, description: string};
export type itemList = Array<item>;

@Injectable()
export class ListService {

  constructor(private storage: Storage) { }

  getList(): Promise<itemList> {

    const self = this;

    return this.storage.keys().then((keys) => {

      const items: Promise<item>[] = keys.map(function (key) {
        return self.storage.get(key);
      });

      return Promise.all(items);
    });
  }

  setItem(item: item): Promise<any> {
    return this.storage.set(item.title, item);
  }

  getItem(title: string): Promise<item> {
    return this.storage.get(title);
  }

  deleteItem(title: string): Promise<item> {
    return this.storage.remove(title);
  }

}
