import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Link } from 'react-router-dom'

const client = new ApolloClient({
  uri:"https://coherent-skink-69.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers:{
    "content-type":"application/json",
    "x-hasura-admin-secret":"mPCN2znKe29oVkgGUzMTNMxzLY5bxwuaJYgo1pZ6M8JaQHmCAD72uJTC9IW53Vjf"
  }
})

//https://mature-sunbird-47.hasura.app/v1/graphql
createRoot(document.getElementById('root')).render(

  <ApolloProvider client={client}>
    <BrowserRouter>
    <StrictMode>
    {/* <SearchProvider> */}
      <App />
     {/* </SearchProvider> */}
    </StrictMode>
    </BrowserRouter>
  </ApolloProvider>
)
