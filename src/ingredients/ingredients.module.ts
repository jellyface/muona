import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IngredientRepository } from './ingredient.repository'
import { IngredientsController } from './ingredients.controller'
import { IngredientsService } from './ingredients.service'

@Module({
  imports: [TypeOrmModule.forFeature([IngredientRepository])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
