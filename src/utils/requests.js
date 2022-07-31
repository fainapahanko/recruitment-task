import axiosInstance from '@utils/API';

export const getRequest = async (URL) => {
    return await axiosInstance.get(`/${URL}`);
}
  
export const postRequest = async (URL, payload) =>  {
    return await axiosInstance.post(`/${URL}`, payload);
}

export const patchRequest = async (URL, payload) => {
    return await axiosInstance.patch(`/${URL}`, payload);
}

export const deleteRequest = async (URL) => {
    return await axiosInstance.delete(`/${URL}`);
}