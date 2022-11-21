import { Controller, Get } from '@nestjs/common'
import { DummyService } from './dummy.service'

@Controller('/app/dummy')
export class DummyController {
  constructor(private dummyService: DummyService) {}
  @Get('/all')
  getAllDummy() {
    return this.dummyService.getAllDummy()
  }
}
