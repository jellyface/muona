import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SteRepository } from './step.repository'
import { StepsController } from './steps.controller'
import { StepsService } from './steps.service'

@Module({
  imports: [TypeOrmModule.forFeature([SteRepository])],
  controllers: [StepsController],
  providers: [StepsService],
})
export class StepsModule {}
