import axios from 'axios';

const api_endpoint = {
    getBooks:'http://127.0.0.1:8008/api/book/get_books',
    getClothes:'http://127.0.0.1:8008/api/clothes/get_clothes',
    getMobiles:'http://127.0.0.1:8008/api/mobile/get_mobiles',
    getCategoris: 'http://127.0.0.1:8008/api/catalog/getCategories',

    getBookDetail:'http://127.0.0.1:8008/api/book/get_detail?product_id=',
    getClotheDetail:'http://127.0.0.1:8008/api/clothes/get_detail?product_id=',
    getMobileDetail:'http://127.0.0.1:8008/api/mobile/get_detail?product_id=',

    addToCart: 'http://127.0.0.1:8002/api/cart/add_to_cart',
    getCart: 'http://127.0.0.1:8002/api/cart/getCarts?customer_id=',
    
    apiLogin: 'http://127.0.0.1:8001/api/user/login',
    apiRegister: 'http://127.0.0.1:8001/api/user/register',

    apiSearchByName: 'http://127.0.0.1:8009/api/search/searh_by_key?search='

}

export default api_endpoint;

export const getProduct = async () => {
    try {
        const categoryResponse = await axios.get(`${api_endpoint.getCategoris}`);
        const categories = categoryResponse.data;

        const bookResponse = await axios.get(`${api_endpoint.getBooks}`);
        const books = bookResponse.data;

        const mobileResponse = await axios.get(`${api_endpoint.getMobiles}`);
        const mobiles = mobileResponse.data;

        const clothesResponse = await axios.get(`${api_endpoint.getClothes}`);
        const clothes = clothesResponse.data;

        const productsByCategory = [];

        categories.forEach(category => {
            const categoryBooks = books.filter(book => book.category_id === category.id);
            const categoryMobiles = mobiles.filter(mobile => mobile.category_id === category.id);
            const categoryClothes = clothes.filter(clothe => clothe.category_id === category.id);
            const productsInCategory = [...categoryBooks, ...categoryMobiles, ...categoryClothes];

            productsByCategory.push({
                'category': category,
                items: productsInCategory
            })
        });
        return productsByCategory;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};