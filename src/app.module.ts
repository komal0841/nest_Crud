import { Module } from '@nestjs/common';
import { BookModule } from './book.module'



@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor() {
    console.log('App Module')
  }
}
 
