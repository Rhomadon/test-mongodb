import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("Ready")
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async() => {
        const response = await axios.get('http://localhost:5000/products/'+id)
        setTitle(response.data.title)
        setPrice(response.data.price)
        setStatus(response.data.status)
    }

    const updateProduct = async(e) => {
        e.preventDefault()
        try {
            await axios.patch('http://localhost:5000/products/'+id, {
                title, 
                price, 
                status
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <form 
            onSubmit={updateProduct}
            >
            <div className="field">
            <label className="label">Nama Barang</label>
            <div className="controls">
                <input 
                type="text" 
                className="input" 
                placeholder="Nama Barang" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            </div>
            <div className="field">
            <label className="label">Harga</label>
            <div className="controls">
                <input 
                type="text" 
                className="input" 
                placeholder="Harga" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            </div>
            <div className="field">
            <label className="label">Stok</label>
            <div className="controls">
                <div className="select is-fullwidth">
                    <select 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)} >
                        <option value="Ready">Ready</option>
                        <option value="Sold Out">Sold Out</option>
                    </select>
                </div>
            </div>
            </div>
            <div className="field">
            <div className="controls">
                <button type="submit" className="button is-success">Ubah</button>
            </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditProduct