import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { FoodItem } from '../food-items/food-item.entity'
import { Ingredient } from '../ingredients/ingredient.entity'

@Entity()
export class Unit {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ unique: true })
  public name: string

  @Column({ unique: true })
  public abbreviation: string

  @Column()
  public description: string

  @Column()
  public metric: boolean

  @OneToMany(() => FoodItem, (foodItem) => foodItem.unit)
  public foodItems: FoodItem[]

  @OneToMany(() => Ingredient, (ingredient) => ingredient.unit)
  public ingredients: Ingredient[]
}
