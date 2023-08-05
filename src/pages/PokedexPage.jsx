import { useEffect, useRef, useState } from "react"
import {useSelector} from "react-redux"
import useFetch from "../hooks/useFetch"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40'

  const [pokemons, getPokemons, getPokemonByType] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons'){
    getPokemons()
    } else {
      getPokemonByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)


  return (
    <div>
      <p className="pokedex">Welcome <span className="pokedex__trainer"> {trainer}</span>, here you can choose your favorite pokemon.</p>
      <div className="pokedex__option">
      <form className="pokedex__form" onSubmit={handleSubmit}>
        <input className="pokedex__input" ref={inputSearch} type="text" />
        <button className="pokedex__button">Search</button>
      </form>
      
        <SelectType 
          setSelectValue={setSelectValue}
        />
      </div>
      <div className="card__container">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage