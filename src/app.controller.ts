import { Controller, Get, Post, Req, Delete, Put, Param, UsePipes, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { IsUrl, IsString, Length } from 'class-validator';
import {PlatformDTOValidationPipe} from './shared/PlatformDTOValidationPipe';
class UserDTO{
  @IsString()
  @Length(0, 10, {
    message: '长度需要小于10'
  })
  platformname: string;
  @IsUrl()
  url: string;
}

class PlatformDTO{
  @IsString()
  @Length(0, 10, {
    message: '长度需要小于10'
  })
  platformname: string;
  @IsUrl()
  url: string;
}

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // fake data
  inLearningPlatforms = [
    {
      id: 1,
      platformname: '极客教程',
      url: 'https://www.geekjc.com',
    },
    {
      id: 2,
      platformname: 'geekjc',
      url: 'https://www.geekjc.com',
    },
  ];


  @Get('/hello')
  getHello(@Req() request: Request): Object {
    return this.appService.getHello();
  }

  @Get('/hello2')
  getHello2(): Object {
    return this.appService.getHello();
  }

  @Post('/addUser')
  
  addUser(@Req() request: Request){
   
    return this.appService.addUser(request.body)
  }



  @Get()
  list() :string{
    return '极客教程'
  }


  @Post()
  @UsePipes(PlatformDTOValidationPipe)
  create(@Body() platformDTO: PlatformDTO){
    return `使用者:${platformDTO.platformname}已建立`;
}


  @Delete()
  delete() {
    return '删除数据'
  }

  @Get(':platformId')
  getPlatformById(@Param('platformId') id) {
    console.log(this.inLearningPlatforms)
    const platform = this.inLearningPlatforms.find((platform) => platform.id === parseInt(id, 10)); //解析后都是字串，要使用parseInt转成number
    const resPlatform = new UserDTO();
    console.log(resPlatform)
    console.log(UserDTO)
    resPlatform.platformname = platform.platformname;
    resPlatform.url = platform.url;
    return resPlatform;
  }














}


