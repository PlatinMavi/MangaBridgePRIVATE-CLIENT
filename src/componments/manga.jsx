import { Link } from "react-router-dom"

export default function Manga({name,desc,image,browser}){
    return(

        <Link to={`/manga/${browser}`} className="flex fredoka text-white overflow-hidden h-52 sm:h-64">
            <img src={"https://api.mangabridge.com/Collection/"+image} alt="" className="rounded-l-2xl translate-x-6 h-52 sm:h-64 w-36 sm:w-44" />
            <div className="rounded-r-2xl bg-white bg-opacity-5 shadow-xl overflow-hidden backdrop-blur-sm p-4 text-right w-48 drop-shadow-lg -translate-x-6">
                <h2 className="break-words text-xl"> {name} </h2>
                <p className="break-words text-sm overflow-hidden h-40 mt-2 text-slate-300"> {desc} </p>
                <p className="text-slate-300">...</p>
            </div>
        </Link>

    )
}