import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'

function App() {

  return (
    <>
      <div >
      

          <Product
            name="Samsung Galaxy Z Fold7 5G"
            price="₹1,67,999"
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRU38-9gZXhGdhg6knH4toLqWRJaOvgiMlF_xc0SJ1KV6dq6JbZ0NsWZpDYUOW3TNdQE7DBb66Q6ijQ3kuJ3KejUHG900q4"
          />
        </div>
          <Product
            name="iPhone 17 Pro Max"
            price="₹79,999"
            image="https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/i/p/iphone_17_pro_max_silver_pdp_image_position_1__en-in.jpg"
          />
    </>
  )
}

export default App
