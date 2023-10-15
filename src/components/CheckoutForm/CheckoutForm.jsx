import styles from './CheckoutForm.module.scss'

function CheckoutForm({ handleName, handlePhone, handleEmail, sendOrder }) {

  return (
    <div className={styles.checkout}>
      <h1 className='fs-4 mt-3'>Finalizar compra</h1>
      <p className='mt-4 mx-4 text-center balance'>Complete el formulario con sus datos. Todos los campos son requeridos.</p>
      <form action='' className={`mt-1 ${styles.form}`}>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='nombre'>Nombre</label>
          <input className='form-control' type='text' id='nombre' placeholder='Linus Torvalds' required onChange={handleName} />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='telefono'>Teléfono (12 dígitos)</label>
          <input className='form-control' type='tel' id='telefono' minLength='12' maxLength='12' placeholder='541123456789' required onChange={handlePhone} />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='email'>Email</label>
          <input className='form-control' type='email' id='email' placeholder='linustorvalds@outlook.com' required onChange={handleEmail} />
        </fieldset>

        <div className='d-flex justify-content-center'>
          <button type='button' className='btn btn-primary mt-4' onClick={sendOrder}>Crear orden</button>
        </div>

      </form>
    </div>
  )
}

export default CheckoutForm