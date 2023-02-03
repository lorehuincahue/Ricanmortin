import React, { useContext } from "react";
import { Context } from "../store/appContext.js"

import { FavCard } from '../component/FavCard.js';
import { EpFavCard } from '../component/Fav_CardEpisodios.js';


export const Favoritos = () =>{ 
    const {store, actions} = useContext(Context);


    return (
    <div className="text-center mt-5 row">

        {store.char_favoritos?.map((obj, index)=>{
            return (
                <FavCard key={index} title={obj.name}  url = {obj.image}  ruta = {`/personajes/detail/${obj.id}`} indice={obj.id}  />
            )
        })}
            {store.ep_favoritos?.map((obj, index)=>{
            return (
                <EpFavCard key={index} title={obj.name}   ruta = {`/episodios/detail/${obj.id}`} indice={obj.id}  />
            )
        })}
    </div>

)};