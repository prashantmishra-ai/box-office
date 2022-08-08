import React from 'react'
import { useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { NavList ,LinkStyled} from './Navs.styled'
const LINKS = [
    {to:'/', text:'Homepage'},
    {to:'/starred', text:'Starred'}
]
export const Navs = () => {
  const location = useLocation()
  return (
    <div>
        <NavList>
            {LINKS.map(item=>(
                <li key={item.to}><LinkStyled className={item.to === location.pathname ?'active':""} to={item.to}>{item.text}</LinkStyled></li>
            ))}
        </NavList>
    </div>
  )
}
