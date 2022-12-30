import request from "../api/Request";

const endpoint = '/products';

const findOneByCode = (code: string) => {
    return request.get(endpoint + '/' + code);
}

const findByName = (name: string) => {
    return request.get(endpoint + '?name=' + name);
}

const ProductRepository = {
    findOneByCode,findByName
}

export default ProductRepository;
