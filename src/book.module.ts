import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class BookModule {
  constructor() {
    console.log('Users Module')
  }
}
