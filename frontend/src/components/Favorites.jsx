import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Favorites = () => {

    const [favorite, setFavorites] = useState([]);

    useEffect(() => {
        axios.get('/favorites')
        .then(res => {
            setFavorites(res.data);
        })
        .catch(err => {
            console.log('error: ', err);
        })
    });

    return(
        <>
        {favorite.map(favorite => {
            return(
                <Table key={favorite.id}>
                
                <thead>
                    <tr>
                        <th> </th>
                        <th>Food Name</th>
                        <th>Country of origin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {favorite.map(favorite => {
                            return <td key={favorite.id}>{favorite.food}</td>,
                            <td key={favorite.id}>{favorite.country}</td>;
                        })}
                        
                    </tr>
                </tbody>
            </Table>
            )
        })
    }
    </>
    )
}

export default Favorites;