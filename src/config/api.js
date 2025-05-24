import axios from "config/axios.customize";
import axios8002 from "config/axios8002.customize";
import axios8003 from "config/axios8003.customize";
import axios8004 from "config/axios8004.customize";

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

export const callGetPatients = () => {
    return axios.get(`/api/accounts/users/role/patient/`,);
}

export const callCreateAppointment = (data) => {
    return axios8002.post(`/api/patients/appointments`, {
        ...data
    });
}

export const callGetAppointmentByPatientId = (id) => {
    return axios8002.get(`/api/patients/appointments/patient/${id}`);
}

export const callGetAppointmentsByDoctorId = (id) => {
    return axios8002.get(`/api/patients/appointments/doctor/${id}`);
}

export const callUpdateAppointmentStatusById = (id, data) => {
    return axios8002.put(`/api/patients/appointments/${id}/status`, { ...data });
}

export const callUpdateAppointmentById = (id, data) => {
    return axios8002.put(`/api/appointments/${id}/update/`, { ...data });
}

export const callDeleteAppointmentById = (id) => {
    return axios8002.delete(`/api/delete/${id}`);
}

export const callGetMedicalReportsByPatientId = id => {
    return axios8003.get(`/api/medical-records/patient/${id}/`)
}

export const callAddMedicalRecord = data => {
    return axios8003.post(`/api/medical-records/`, { ...data })
}

export const callUpdateMedicalRecord = (id, data) => {
    return axios8003.put(`/api/medical-records/${id}/`, { ...data })
}

export const callDeleteMedicalRecord = (id) => {
    return axios8003.delete(`/api/delete-medical-record/${id}/`)
}

export const callGetMedicalReportsByDoctorId = id => {
    return axios8003.get(`/api/list-medical-records-by-doctor/${id}/`)
}

export const callCreatePrescription = data => {
    return axios8003.post(`/api/prescriptions/`, { ...data })
}

export const callUpdatePrescription = (id, data) => {
    return axios8003.put(`/api/prescriptions/${id}/`, { ...data })
}

export const callDeletePrescription = (id) => {
    return axios8003.delete(`/api/delete-prescription/${id}/`)
}

export const callGetPrescriptionsByPatientId = id => {
    return axios8003.get(`/api/prescriptions/patient/${id}/`)
}

export const callGetPrescriptionsByDoctorId = id => {
    return axios8003.get(`/api/list-prescriptions-by-doctor/${id}/`)
}

export const callGetDrugs = () => {
    return axios8004.get(`/api/pharmacist/`)
}

export const callCreateDrug = (data) => {
    return axios8004.post(`/api/pharmacist/`, { ...data })
}

export const callUpdateDrug = (id, data) => {
    return axios8004.put(`/api/pharmacist/${id}/`, { ...data })
}

export const callDeleteDrug = (id) => {
    return axios8004.delete(`/api/pharmacist/${id}/`)
}

export const callGetDrugDistributions = () => {
    return axios8004.get(`/api/drugdistributions/`)
}

export const callCreateDrugDistribution = (data) => {
    return axios8004.post(`/api/drugdistributions/`, { ...data })
}

export const callUpdateDrugDistribution = (id, data) => {
    return axios8004.put(`/api/drugdistributions/${id}/`, { ...data })
}

export const callDeleteDrugDistribution = (id) => {
    return axios8004.delete(`/api/drugdistributions/${id}/`)
}