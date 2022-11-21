import { Injectable } from '@nestjs/common'

@Injectable()
export class DummyService {
  getAllDummy() {
    return ['1', '2', '3']
  }
}
