import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
const Referrals = ({id, title, content}) => {
  const {attributes, listeners, setNodeRef, transform, transition}=
  useSortable({id});
  const style={
    transition, 
    transform: CSS.Transform.toString(transform)
  }
  return (
    <div className='Referral'
    ref = {setNodeRef}
    {...attributes}
    {...listeners} style={style}>
    </div>
  )
}

export default Referrals
