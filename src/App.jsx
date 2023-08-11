import { useEffect, useState, useMemo } from 'react'
import './App.css'
import Button from './components/Button'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('home')

  useEffect(() => {
      fetch('https://api.airtable.com/v0/appA64zd0ezW6TqZ1/tblom4ULncVNbyXiN',
      { headers: 
        { 'Authorization': 'Bearer patKX8EGF8lVSd6PB.fafe66c6eba19dcabf9443077f88aff77380621ffa5edffa2ca7960534636b56' } 
      })
        .then(res => res.json())
        .then(data => setProducts(data.records))
  }, [])


  const tt = products.reduce((acc, product) => {
    return [...acc, ...product.fields.tags]
  }, [])
  const uniqueTags = Array.from(new Set(tt))

  if (!products.length) return <div>...Loading</div>

  return (
    <div className='App'>
      <div className='content'>
        <h1>SHOP</h1>
        <div className='row'>
        {uniqueTags.map(tag => (
          <Button style={{backgroundColor: selectedTag === tag && 'greenyellow'}} title={tag} onClick={() => setSelectedTag(tag)}/>
        ))}
        </div>
        {products?.filter(product => product.fields.tags.includes(selectedTag)).map((product) => (
           <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
