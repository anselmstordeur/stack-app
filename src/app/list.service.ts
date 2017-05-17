import {Injectable} from "@angular/core";
import {listMock} from "./listMock";

export type item = {title: string, description: string};
export type itemList = Array<item>;

@Injectable()
export class ListService {

  getList(): Promise<itemList> {

    return Promise.resolve(listMock);
  }

}
