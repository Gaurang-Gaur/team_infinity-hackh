import './ListItems.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ListItems = () => {
    const [weapons, setWeapons] = useState([]);

    const handleRemove = async (id) => {
        await fetch(`http://localhost:3000/weapon/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })
            .then(res => { return res.json() })
            .then(data => {
                console.log(data);
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        fetch('http://localhost:3000/weapon')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                console.log(data.data);
                setWeapons(data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2 className="cart-title">INVENTORY</h2>
                <p className="cart-text">Inventory List</p>
            </div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sender City</th>
                        <th>Receiver City</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Age</th>
                        <th>Performance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {weapons?.map((weapon) => {
                        return (
                            <tr key={`${weapon?._id}`}>
                                <td><img src="https://www.shutterstock.com/image-photo/old-green-russian-artillery-field-260nw-686296822.jpg" alt="img" className="cartImg" />{weapon.name}</td>
                                <td>{weapon.manufacturingdate}</td>
                                <td>{weapon.qty}</td>
                                <td>{weapon.lastupdate}</td>
                                <td>{weapon.type}</td>
                                <td>4 years</td>
                                <td>{weapon.features}</td>
                                <td><i className="fa-solid fa-xmark" onClick={() => handleRemove(weapon._id)}></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="cart-summary">
                <Link to="/inventory/add"><button className="checkout-button">ADD</button></Link>
            </div>
        </div>
    )
}

export default ListItems