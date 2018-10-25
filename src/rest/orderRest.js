import { axiosInstance } from '../config';
import { DEFAULT_ORDER_REP } from "../domain/encounter/constants";

const api = {
  fetchActiveOrdersByPatient: patientUUID => axiosInstance.get(`order?totalCount=true&sort=desc&status=active&patient=${patientUUID}&v=custom:${DEFAULT_ORDER_REP}`)
    .then((response) => {
      if (response.status !== 200) {
        throw response;
      } else {
        return response.data;
      }
    }),
};

export default api;
