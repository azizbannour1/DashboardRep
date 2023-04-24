import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from "../../components/sidebar/Sidebar";
import { Button } from '@mui/material';
import "./products.css";
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
    <Sidebar/>
    <div className='btn-product-n-style'>
      <Link  to="/newProduct" style={{ textDecoration: 'none'}}>
       <Button
        variant="contained"
        style={{
        background: "#F2D500",
        opacity: 0.6,
        border: "1px solid rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(25px)",
        width: 250,
       }}
       type="button"
       >
         +New Product 
      </Button>  
      </Link> 
      </div>

    <TableContainer component={Paper} sx={{ height: 300, width: '80%' ,marginLeft: '18%', marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Inventory</TableCell>
            <TableCell>Category</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.category}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Product;
