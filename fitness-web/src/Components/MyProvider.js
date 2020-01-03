import React, { Component } from 'react'


const Mycontext = React.createContext()
const MycontextProvide = Mycontext.Provider;
const MycontextConsumer = Mycontext.Consumer;


export  {MycontextConsumer,MycontextProvide}
