
import { useContext } from "react"
import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="container-cart my-3 text-white">
      <Link to="/cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#fffffff",
          }}
        />
        <div className="bubble-counter">
          <span style={{color: "#ffffff"}}>{cart.length}</span>
        </div>
      </Link>
    </div>
  )
}
