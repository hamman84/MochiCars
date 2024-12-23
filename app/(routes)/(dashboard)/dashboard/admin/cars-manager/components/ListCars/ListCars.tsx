import CardCar from './CardCar/cardCar'
import { ListCarsProps } from './ListCars.types'

export default function ListCars(props: ListCarsProps) {
    const { cars } = props
  return (
    <div 
    className='grid gap-6 my-4' 
    style={{gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', justifyContent: 'center'}}>
        {cars.map((car) => (
            <CardCar key={car.id} car={car} />
        ))}
    </div>
  )
}
