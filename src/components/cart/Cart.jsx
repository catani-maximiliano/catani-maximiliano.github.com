import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import swal from "sweetalert"
import "./Cart.css"
import CartItem from "../carItem/CartItem"
import NoInfo from "../noInfo/NoInfo"
import Form from "../form/Form"
import { useState } from "react"
import { Link } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import Orders from "../orders/Orders"
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, getTotalQuantity } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [order, setOrder] = useState({})

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true)
    } else {
      alert("no se puede comprar la nada")
    }
  }

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  const limpiar = () => {
    swal({
      title: "Seguro quieres borrar todo el carrito?",
      text: "Eliminaras Todos los Productos del Carrito de Compra!",
      icon: "warning",
      buttons: ["no", "si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Carrito borrado con exito!", {
          icon: "success",
        })
        clearCart()
      } else {
        swal("Cancelaste la operacion")
      }
    })
  }

  if (orderId) {
    return (
      <div className="flex mt-12 justify-center">
        <div className="mt-12 border-2 border-slate-300 p-10">

          <h1 className="text-xl mb-3">Gracias por comprar con nosotros <Orders order={order} /></h1>
          <div className="flex flex-row mb-4">
            <h1 className="font-bold underline mx-2 text-xl ">tu orden de compra es : </h1>
            <h1 className="mx-2 text-xl">{orderId}</h1>
          </div>
          <div className=" bg-slate-200 border border-slate-300 hover:bg-slate-300 py-2 px-2 rounded-md font-semibold text-center">
            <Link to={"/"}>Volver a comprar</Link>
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className="flex justify-evenly mt-12 pt-12">
      <div className="w-6/6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length < 1 ? <NoInfo /> : <button className=" bg-slate-200 border flex float-right border-slate-300 hover:bg-slate-300 px-4 py-2 rounded-md font-semibold" onClick={() => limpiar()} >
          Vaciar carrito

          <div className="p-1">
            <FaTrashAlt />
          </div>
        </button>}
      </div>

      <div className=" border-slate-400 border-2 h-1/2 rounded-md my-5 p-4">

        <h3 className="py-2 px-2 border-b-2 font-semibold">{getTotalQuantity()} artículos</h3>
        <h3 className="py-2 px-2 border-b-2 font-bold text-xl">
          Precio total: ${getTotalPrice() > 0 ? getTotalPrice() + ".-" : "No hay items"}
        </h3>
        <div className="py-2 px-2">
          {buy ? (
            <Form
              cart={cart}
              getTotalPrice={getTotalPrice}
              setOrderId={setOrderId}
              clearCart={clearCart}
            />
          ) : (
            cart.length > 0 && (
              <button className="w-full  bg-slate-200 border border-slate-300 hover:bg-slate-300 py-2 px-2 rounded-md" onClick={openForm}>
                Comprar
              </button>
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default Cart
