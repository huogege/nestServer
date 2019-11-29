import { Module } from '@nestjs/common';
import { PlatformDTOValidationPipe } from './PlatformDTOValidationPipe';
@Module({
  providers: [
    PlatformDTOValidationPipe
  ]
})
export class SharedModule {}
