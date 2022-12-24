import request from "../api/Request";

const endpoint = '/products';

const findOneByCode = (code: string) => {
    return request.get(endpoint + '/' + code);
}

const ProductRepository = {
    findOneByCode
}

export default ProductRepository;
