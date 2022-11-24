import * as path from 'path'
import * as fs from 'fs'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = `${uuid.v4()}.jpg`
      console.log('fileService fileName === ', fileName)
      const filePath = path.resolve(__dirname, '..', 'static')
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true })
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer)
      return fileName
    } catch (error) {
      throw new HttpException('Error occurred during file writing', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
