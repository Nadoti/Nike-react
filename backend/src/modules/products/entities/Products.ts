import { Entity, Column, CreateDateColumn } from 'typeorm'
import {v4 as uuidV4 } from 'uuid'

@Entity('products')
class Products {
  @Column()
  id: string

  @Column()
  ean: string

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  stock: number

  @Column()
  brand: string

  @Column()
  type: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuidV4()  
    }
  }
}

export { Products } 