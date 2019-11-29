import { Injectable } from '@nestjs/common';
import {getManager} from "typeorm";
import {Photo} from './photo/photo.entity';
import { promises } from 'fs';
@Injectable()
export class AppService {
  getHello() : Object{
    return {a:'1'};
  }
  async addUser(request) : Promise<Object>{
    console.log(request)
    const entityManager = getManager(); // you can also get it via getConnection().manager
    const photo = await entityManager.findOne(Photo);
    console.log(photo)
    photo.name = "fire3";
    await entityManager.save(photo);
    return {
      b: 1
    }
  }
}
