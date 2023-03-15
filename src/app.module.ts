import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DataSource } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RecipesModule } from './recipes/recipes.module'
import { StepsModule } from './steps/steps.module'
import { IngredientsModule } from './ingredients/ingredients.module'
import { FoodItemsModule } from './food-items/food-items.module'
import { UnitsModule } from './units/units.module'
import { FoodItem } from './food-items/food-item.entity'
import { Ingredient } from './ingredients/ingredient.entity'
import { Recipe } from './recipes/recipe.entity'
import { Step } from './steps/step.entity'
import { Unit } from './units/unit.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.STAGE}`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: '',
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('TYPEORM_HOST'),
          port: configService.get('TYPEORM_PORT'),
          username: configService.get('TYPEORM_USERNAME'),
          password: configService.get('TYPEORM_PASSWORD'),
          database: configService.get('TYPEORM_DATABASE'),
          entities: [FoodItem, Ingredient, Recipe, Step, Unit],
          synchronize: true,
        }
      },
    }),
    RecipesModule,
    StepsModule,
    IngredientsModule,
    FoodItemsModule,
    UnitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
