
import { Link } from "react-router-dom"


const Item = ({ element }) => {

  return (
    <div className="flex max-w-md m-3 shadow-xl hover:shadow-2xl">
      <div className=" p-3 border border-slate-300 rounded-md">
        <img className="flex mx-auto  max-h-96 border border-slate-300 rounded-md" src={element.img} alt={element.name} />
        <div className="flex flex-col ">
          <h2 className="my-2 text-xl font-bold">{element.name}</h2>
          <h2 className="text-xl my-2 font-bold text-red-700">${element.price}</h2>
          <p>{element.description.length < 200 ? element.description : element.description.substring(0, 200).concat("...")}</p>
          <div className="justify-self-end self-center ">
            <Link to={`/itemDetail/${element.id}`}>
              <button className=" mx-auto my-4 justify-self-center px-2  align-middle py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Más Información
              </button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Item
