import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("Ready")
    const navigate = useNavigate()

    const saveProduct = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/products', {
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
            onSubmit={saveProduct}
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
                <button type="submit" className="button is-success">Simpan</button>
            </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddProduct