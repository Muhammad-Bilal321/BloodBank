import React from 'react'

export default function CardBP({ id, userName, age, institute, isActive}) {
  return (
    <div className='card'>
      <div>ID: {id}</div>
      <div>UserName: {userName}</div>
      <div>Age: {age}</div>
      <div>Institute: {institute}</div>
      <div>Active: {isActive}</div>
    </div>
  )
}
