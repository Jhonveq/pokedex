import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import '../components/PokedexPage/styles/PokedexIdPage.css'

const PokedexIdPage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon , getSinglePokemon] = useFetch(url)
 
  useEffect(() => {
    getSinglePokemon()
  }, [id])

  const colors = pokemon?.types[0].type.name

  return (
    <div className="id__card" >
     <article className="id__container">
        <header className={`id__header ${colors}-gradient`}>
          <img className="id__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
          <h2 className="id__number">#{pokemon?.id}</h2>
          <h2 className="id__name" ><span className="id__name--line">-</span>{pokemon?.name}<span className="id__name--line">-</span></h2>
          <div className="id__characteristics">
            <li className="id__characteristics--value">
              <h4 className="id__weight">Weight</h4>
              <span >{pokemon?.weight}</span>
            </li>
            <li>
              <h4 className="id__height">Height</h4>
              <span className="id__characteristics--value">{pokemon?.height}</span>
            </li>
          </div>
          <ul className="id__types">
            <h2>Types</h2>
                {
                    pokemon?.types.map(typeInfo => (
                        <li className={`id__type--name ${colors}-gradient`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            <h2>Abilities</h2>
                {
                  pokemon?.abilities.map(abilitiesInfo => (
                    <li className="id__abilities--name" key={abilitiesInfo.ability.url}>{abilitiesInfo.ability.name}</li>
                ))
                }
           </ul>
           <ul className="id__movements">
            <h2 className="id__movements--title">Movements</h2>
              <div className="id__move--container">
                {
                  pokemon?.moves.map(movementsInfo => (
                    <li className="id__move--name" key={movementsInfo?.move.url}>{movementsInfo?.move.name}</li>
                ))
                }
              </div>
           </ul>
     </article>
    </div>
  )
}

export default PokedexIdPage