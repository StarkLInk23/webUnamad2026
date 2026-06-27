//PASO 2
import api from '../config/connectDB';

export const productService = {
    getAll: async () => {
        const response = await api.get('/productos');
        return response.data;
    },
    delete: async (id) => {
        const response = await api.delete(`/productos/${id}`);
        return response.data;
    },
    update: async (id, productData) => {
        const response = await api.put(`/productos/${id}`, productData);
        return response.data;
    }
}