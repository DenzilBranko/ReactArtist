import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const ArtistList = (props) =>{
   const list = ({allArtists}) => {
       
        if(allArtists) {
            return allArtists.map((item) =>{
                const style = {
                    background : `url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return (
                    <Link key={item.id} to={`/artists/${item.id}`} className="artis_item" style={style} >
                        <div>{item.name}</div><br/>
                   </Link>
                 )
             })
         }
    }

    return (
        <div className="artist_list">
            <h4>All Artists List</h4>
            {list(props)}
        </div>
     )
 }

export default ArtistList;
