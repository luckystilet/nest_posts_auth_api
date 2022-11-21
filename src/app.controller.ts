import { Controller, Get } from '@nestjs/common'

@Controller('/api')
export class AppController {
  @Get('/users')
  getUsers() {
    return [{id: 123, name: 'Alex_Terrible'}]
  }
}
