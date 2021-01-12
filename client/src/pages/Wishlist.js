import React from "react";
import useSWR from "swr";
import "../App.css"
import Footer from "../components/Footer/Footer"
import SearchCheapGames from "../components/SearchShark/Search"
import Wishlist from "../components/Wishlist/Wishlist";


function WishListPage({ fetcher }){
    const { data, error } = useSWR('/api/user', fetcher)

    return(
<>
        <Wishlist/>
        <pre>{JSON.stringify(error || data)}</pre>
        <SearchCheapGames/>
        <Footer/>
</>
    )
}

export default WishListPage