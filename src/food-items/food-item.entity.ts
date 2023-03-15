import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Unit } from '../units/unit.entity'
import { Ingredient } from '../ingredients/ingredient.entity'

@Entity()
export class FoodItem {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public name: string

  @Column()
  public description: string

  @Column()
  public fineli_url: string

  @ManyToOne(() => Unit, (unit) => unit.foodItems)
  public unit: Unit

  @OneToOne(() => Ingredient, (ingredient) => ingredient.foodItem)
  public ingredient: Ingredient

  @Column()
  public amount: number

  @Column()
  public calories: number

  @Column()
  public carbs: number

  @Column()
  public fats: number

  @Column()
  public proteins: number
}
