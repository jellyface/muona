import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Ingredient } from '../ingredients/ingredient.entity'
import { Recipe } from '../recipes/recipe.entity'

@Entity()
export class Step {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public title: string

  @Column()
  public description: string

  @Column()
  public order: number

  @ManyToOne(() => Recipe, (recipe) => recipe.steps)
  public recipe: Recipe

  @OneToMany(() => Ingredient, (ingredient) => ingredient.step)
  public ingredients: Ingredient[]
}
