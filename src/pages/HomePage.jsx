import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom";
import "../components/PokedexPage/styles/HomePage.css"

const HomePage = () => {
 
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {

    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }


  return (
    <div className="login__container">
        <img className="login__image" src="src\img\image 11.png" alt="logo" />
        <h2 className="login__title">Hi trainer!</h2>
        <p className="login__paragraph">To start with the app, please give me your trainer name 🔥</p>
        <form className="login__form" onSubmit={handleSubmit}>
            <input className="login__input" placeholder="Enter your name..." ref={inputTrainer} type="text" />
            <button className="login__button">Gotta catch 'em all!</button>
        </form>
    </div>
  )
}

export default HomePage