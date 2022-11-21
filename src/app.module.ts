import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

@Module({
  imports: [],
  providers: [],
  controllers: [AppController],
  exports: []
})
export class AppModule {

}
