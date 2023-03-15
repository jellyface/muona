import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Ingredient } from '../ingredients/ingredient.entity'
import { Step } from '../steps/step.entity'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public title: string

  @Column()
  public description: string

  @Column({ nullable: true })
  public imageUrl: string

  @Column()
  public hasSource: boolean

  @Column({ nullable: true })
  public sourceUrl: string

  @OneToMany(() => Step, (step) => step.recipe)
  public steps: Step[]

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
  public ingredients: Ingredient[]
}
