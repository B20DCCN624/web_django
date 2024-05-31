import './style.css'
import { Link } from 'react-router-dom';
import avt from '../../images/avt.png'
import { useEffect, useState } from 'react';
import api_endpoint, { getProduct } from '../../utils/ApiEndpoint';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [products, setProducts] = useState([])
    const [isDone, setIsDone] = useState(false)
    const navi = useNavigate()
    useEffect(() => {
        getProduct()
            .then(products => {
                console.log(products)
                setProducts(products);
                setIsDone(true)
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

    }, [])

    const handleClickDetail = (product_id) => {
        navi(`/product/${product_id}`)
    }

    return (
        <div className="component-home-container">

            <div className='list-product'>
                <div className='product-container'>
                    <p>Quản lý bệnh nhân</p>
                </div>
                <div className='product-container'>
                    <p>Quản lý nhân viên</p>
                </div>
                <div className='product-container'>
                    <p>Quản lý phòng khám</p>
                </div>
                <Link to={`/appointment`}>
                    <div className='product-container'>
                            <p>Quản lý lịch hẹn</p>
                    </div>
                </Link>
                <div className='product-container'>
                    <p>Lên hóa đơn</p>
                </div>
                <div className='product-container'>
                    <p>Quản lý kho</p>
                </div>
                <div className='product-container'>
                    <p>Quản lý hồ sơ bệnh nhân</p>
                </div>
                <div className='product-container add-container'>
                    <i class="fa-solid fa-plus icon_plus"></i>
                </div>
            </div>

        </div>
    );
}

export default Home;