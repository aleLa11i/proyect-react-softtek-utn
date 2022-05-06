import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DescriptionStarItem } from './DescriptionStarItem';
import { DescriptionTextArea } from './DescriptionTextArea';
import { DescriptionTitle } from './DescriptionTitle';

const data =[ 
  { 
    label:'Comida',
    name: 'food'
  },
  { 
    label:'Lugar',
    name: 'place'
  },
  { 
    label:'Vista',
    name: 'view'
  },
  { 
    label:'Entretenimiento',
    name: 'entertainment'
  },
  { 
    label:'Tiempo',
    name: 'weather'
  }
  ]

export const SetDescription = () => {
  return (
    <div
        className='d-flex flex-column m-4'
    >
        <DescriptionTitle />
        <DescriptionTextArea />
        {
            data.map( (item,index) => (
              <DescriptionStarItem
                label={item.label}
                name={item.name}
                key={index}
              />
            ))
        }
      <Button className='next-button' onClick > Finalizar</Button>
    </div>
  )
}
