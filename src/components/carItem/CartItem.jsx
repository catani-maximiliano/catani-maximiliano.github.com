
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"
import {  FaTrashAlt} from "react-icons/fa";


const CartItem = ({ item }) => {

  const { deleteProductById } = useContext(CartContext)

  return (
    <div key={item.id} className="flex h-44 my-5 border border-slate-400 rounded-xl w-6/6">
      <img src={item.img} alt="" className="rounded-xl border border-slate-400 " />
      <div className="ml-4 mt-4 flex justify-between w-full">
        <div className="">
          <h2 className="font-bold uppercase underline text-xl">{item.name}</h2>
          <h2 className="mt-2 font-semibold">Precio <span>${item.price}.-</span></h2>
          <h2 className="mt-1 font-semibold">Cantidad: <span>{item.quantity}</span></h2>
          <p className="mt-1 font-semibold ">Subtotal: <span className="font-bold">${item.quantity*item.price}.-</span></p>
        </div>
        <div className="self-center">
          <button  className=" bg-slate-200 border border-slate-300 hover:bg-slate-300 p-4 rounded-xl mx-2" 
          onClick={() => deleteProductById(item.id)
            
            }>
          <FaTrashAlt /> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default CartItem
