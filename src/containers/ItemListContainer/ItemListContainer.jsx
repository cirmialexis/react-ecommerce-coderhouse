import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './ItemListContainer.module.scss'

function ItemListContainer() {

  const [list, setList] = useState([])
  const params = useParams()

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const items = await response.json()
      const filteredItems = items.filter((item) => item.category === params.id)
      setList(filteredItems.length > 0 ? filteredItems : items)
    }

    getItems()
  }, [params])

  return (
    <main className={`item-list-container container-fluid container-lg ${styles.itemListContainer}`}>
      <div className='d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>

        {
          list.map((item) => (
            <div key={item.id} className='d-flex col justify-content-center my-4'>
              <div className={`card ${styles.card}`}>
                <div className={`mt-1 image-container ${styles.imageContainer}`}>
                  <img src={item.image} className={styles.cardImgTop} alt='...' />
                </div>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <h5 className='card-title'>{item.title}</h5>
                  <div className='border-top'>
                    <p className={`card-text fs-4 mt-2 mb-3 ${styles.itemPrice}`}>$ {item.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <Link to={`/item/${item.id}`} className='btn btn-primary'>Ver descripción</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </main >
  )
}

export default ItemListContainer