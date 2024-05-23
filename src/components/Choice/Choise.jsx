
import { useState } from 'react';
import './Choise.css'

import data from '../../data/data'

function Choise() {

  const [selectedOptions, setSelectedOptions] = useState({
    character: false,
    action: false,
    place: false
  });

  const [generatedPhrase, setGeneratedPhrase] = useState('');
  
  const handleSelectionChange = (e) => {
    const { name } = e.target;
    setSelectedOptions((prevStat) => ({
      ...prevStat,
      [name]: !prevStat[name]
    }));
  };

  const generatePhrase = () => {
    let phrase = '';

    if (selectedOptions.character) {
      const randomCharacter = data.characters[Math.floor(Math.random() * data.characters.length)];
      phrase += `${randomCharacter.name}`;
    }

    if (selectedOptions.action) {
      const randomAction = data.actions[Math.floor(Math.random() * data.actions.length)];
      phrase += ` ${randomAction.action}`;
    }

    if (selectedOptions.place) {
      const randomPlace = data.places[Math.floor(Math.random() * data.places.length)];
      phrase += ` ${randomPlace.name} `;
    }

    setGeneratedPhrase(`" ${phrase.trim()} "`);
  };

  return (
    <>
      <section className='choise'>
        <article>
          <input 
            className='choise__input' 
            type="checkbox" 
            name="character" 
            value="Personnage" 
            onChange={handleSelectionChange} 
          />
          <label className='choise__label' htmlFor="character">Personnage</label>

          <input 
            className='choise__input' 
            type="checkbox" 
            name="action" 
            value="Action" 
            onChange={handleSelectionChange} 
          />
          <label className='choise__label' htmlFor="action">Action</label>

          <input 
            className='choise__input' 
            type="checkbox" 
            name="place" 
            value="Lieu" 
            onChange={handleSelectionChange} 
          />
          <label className='choise__label' htmlFor="place">Lieu</label>
        </article>
        <button className='choise__validation' onClick={generatePhrase}>Générer</button>
        {generatedPhrase && <p className='generated__phrase'>{generatedPhrase}</p>}
      </section>
    </>
  )
}

export default Choise
