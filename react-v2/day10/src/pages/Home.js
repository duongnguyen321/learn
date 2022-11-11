import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){

  const navigate = useNavigate();

  const openAboutPage = () => {
      navigate('/about');
  }

  return (
      <>
          <h1>
              HomePage
          </h1>
          <button onClick={openAboutPage}>
            Open About
          </button>
      </>
  )

}