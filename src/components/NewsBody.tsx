import React from 'react'
import { BodyInterface } from './interface'

const NewsBody = ({body} : BodyInterface) => {
  return (
    <>
     <p>news body</p>
     {body}
      </>
  )
}

export default NewsBody