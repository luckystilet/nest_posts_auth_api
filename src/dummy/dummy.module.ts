import { Module } from '@nestjs/common'
import { DummyController } from './dummy.controller'
import { DummyService } from './dummy.service'

@Module({
  imports: [],
  providers: [DummyService],
  controllers: [DummyController],
  exports: []
})
export class DummyModule {

}
