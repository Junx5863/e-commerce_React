import GET_API_COMMERCE from "../Api/api_index";
import { request } from "../Axios";


export const getCategorys = async () => {
    try {
      const { data } = await request({
        url: GET_API_COMMERCE.GET_CATEGORYS,
      });
      console.log({ data });
      return data;
    } catch (error) {
      throw {
        message: 'Error al obtener las Categorias',
        status: 404,
      };
    }
  };