import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from './Spinner';
import './players.css'

const Players = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('https://www.balldontlie.io/api/v1/players?per_page=100').then(res => {
            const res10 = res.data.data.slice(0, 10)
            setPlayers(res10);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    const playerList = players.length ?
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Team</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(p => {
                        return(
                        <tr key={p.id}>
                            <td>{p.first_name}</td>
                            <td>{p.last_name}</td>
                            <td>{p.team.full_name}</td>
                            <td>{p.team.city}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        : (<Spinner />)

    return (
        <div className='players'>
            <h3>Players</h3>
            {playerList}
        </div>
    )
}

export default Players