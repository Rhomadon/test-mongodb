import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async() => {
        const response = await axios.get('http://localhost:5000/products')
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete('http://localhost:5000/products/'+id)
            getProducts()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <Link to={"add"} className="button is-success">Tambah Barang</Link>
        <table className="table is-striped is-fullwidth mt-6">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                <tr key={ product._id }>
                    <td>{ index + 1 }</td>
                    <td>{ product.title }</td>
                    <td>{ product.price }</td>
                    <td>{ product.status }</td>
                    <td>
                        <Link to={'edit/'+product._id} className="button is-info is-small">Ubah</Link>
                        <button onClick={() => deleteProduct(product._id)} className="button is-danger is-small">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ProductsList