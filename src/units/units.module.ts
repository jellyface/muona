import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UnitRepository } from './unit.repository'
import { UnitsController } from './units.controller'
import { UnitsService } from './units.service'

@Module({
  imports: [TypeOrmModule.forFeature([UnitRepository])],
  controllers: [UnitsController],
  providers: [UnitsService],
})
export class UnitsModule {}
