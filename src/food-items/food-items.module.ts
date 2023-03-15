import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FoodItemRepository } from './food-item.repository'
import { FoodItemsController } from './food-items.controller'
import { FoodItemsService } from './food-items.service'

@Module({
  imports: [TypeOrmModule.forFeature([FoodItemRepository])],
  controllers: [FoodItemsController],
  providers: [FoodItemsService],
})
export class FoodItemsModule {}
