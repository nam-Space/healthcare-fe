import axios from "config/axios.customize";
import axios8002 from "config/axios8002.customize";

// user
export const callLogin = ({ username, password }) => {
    return axios.post(`/api/token/`, {
        username,
        password,
    });
};

export const callRegister = (data) => {
    return axios.post(`/api/accounts/register/`, {
        ...data
    });
};

export const callGetAccount = (config) => {
    return axios.get(`/api/accounts/auth/profile/`, config);
}

export const callLogout = () => {
    return axios.post(`/api/auth/logout`);
};

export const callGetDoctors = () => {
    return axios.get(`/api/accounts/users/role/doctor/`,);
}

export const callCreateAppointment = (data) => {
    return axios8002.post(`/api/patients/appointments`, {
        ...data
    });
}

export const callGetAppointmentByPatientId = (id) => {
    return axios8002.get(`/api/patients/appointments/patient/${id}`);
}