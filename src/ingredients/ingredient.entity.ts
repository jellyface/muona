import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Step } from '../steps/step.entity'
import { Recipe } from '../recipes/recipe.entity'
import { Unit } from '../units/unit.entity'
import { FoodItem } from '../food-items/food-item.entity'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public amount: number

  @ManyToOne(() => Unit, (unit) => unit.ingredients)
  public unit: Unit

  @ManyToOne(() => Step, (step) => step.ingredients)
  public step: Step

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  public recipe: Recipe

  @OneToOne(() => FoodItem, (foodItem) => foodItem.ingredient)
  public foodItem: FoodItem
}
