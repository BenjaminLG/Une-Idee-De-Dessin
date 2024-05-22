
import './Choise'

function Choise() {
  

  return (
    <>
      <section className='choise'>
        <input className='choise__input' type="radio"  name="Choix_du_personnage" value="Personnage"/>
        <label className='choise__label' htmlFor="personnage">Personnage</label>
        <input className='choise__input' type="radio"  name="Choix_action" value="Action"/>
        <label className='choise__label' htmlFor="action">Action</label>
        <input className='choise__input' type="radio"  name="Choix_du_lieu" value="Lieu"/>
        <label className='choise__label' htmlFor="lieu">Lieu</label>
      </section>
    </>
  )
}

export default Choise
