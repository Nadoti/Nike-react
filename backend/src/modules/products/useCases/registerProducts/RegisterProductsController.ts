import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterProductsUseCase } from './RegisterProductsUseCase'

interface IRequest {
  ean: string
  name: string
  price: number 
  stock: number
  brand: string
  type: string
}

class RegisterProductsController {
  async handle(request:Request, response:Response) {
    const products: IRequest = request.body

    const registerProductsUseCase = container.resolve(RegisterProductsUseCase)

    await registerProductsUseCase.register(products)

    return response.status(201).send()
  }
}



export { RegisterProductsController }