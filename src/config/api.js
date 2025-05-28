import axios from "config/axios.customize";
import axios8002 from "config/axios8002.customize";
import axios8003 from "config/axios8003.customize";
import axios8004 from "config/axios8004.customize";
import axios8005 from "config/axios8005.customize";
import axios8006 from "config/axios8006.customize";

// user
export const callLogin = ({ username, password }) => {
    return axios.post(`/api/auth/token/`, {
        username,
        password,
    });
};

export const callRegister = (data) => {
    return axios.post(`/api/auth/accounts/register/`, {
        ...data
    });
};

export const callGetAccount = (config) => {
    return axios.get(`/api/auth/accounts/auth/profile/`, config);
}

export const callLogout = () => {
    return axios.post(`/api/auth/auth/logout`);
};

export const callGetDoctors = () => {
    return axios.get(`/api/auth/accounts/users/role/doctor/`,);
}

export const callGetPatients = () => {
    return axios.get(`/api/auth/accounts/users/role/patient/`,);
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
    return axios8002.get(`/api/patient/medical-records/${id}/`)
}

export const callAddMedicalRecord = data => {
    return axios8006.post(`/api/medical-records/`, { ...data })
}

export const callUpdateMedicalRecord = (id, data) => {
    return axios8006.put(`/api/medical-records/${id}/`, { ...data })
}

export const callDeleteMedicalRecord = (id) => {
    return axios8006.delete(`/api/delete-medical-record/${id}/`)
}

export const callGetMedicalReportsByDoctorId = id => {
    return axios8006.get(`/api/list-medical-records-by-doctor/${id}/`)
}

export const callCreatePrescription = data => {
    return axios8006.post(`/api/prescriptions/`, { ...data })
}

export const callUpdatePrescription = (id, data) => {
    return axios8006.put(`/api/prescriptions/${id}/`, { ...data })
}

export const callDeletePrescription = (id) => {
    return axios8006.delete(`/api/delete-prescription/${id}/`)
}

export const callGetPrescriptionsByPatientId = id => {
    return axios8002.get(`/api/patient/prescriptions/${id}/`)
}

export const callGetPrescriptionsByDoctorId = id => {
    return axios8006.get(`/api/list-prescriptions-by-doctor/${id}/`)
}

export const callGetDrugs = () => {
    return axios8004.get(`/api/pharmacist/pharmacist/`)
}

export const callCreateDrug = (data) => {
    return axios8004.post(`/api/pharmacist/pharmacist/`, { ...data })
}

export const callUpdateDrug = (id, data) => {
    return axios8004.put(`/api/pharmacist/pharmacist/${id}/`, { ...data })
}

export const callDeleteDrug = (id) => {
    return axios8004.delete(`/api/pharmacist/pharmacist/${id}/`)
}

export const callGetDrugDistributions = () => {
    return axios8004.get(`/api/pharmacist/drugdistributions/`)
}

export const callCreateDrugDistribution = (data) => {
    return axios8004.post(`/api/pharmacist/drugdistributions/`, { ...data })
}

export const callUpdateDrugDistribution = (id, data) => {
    return axios8004.put(`/api/pharmacist/drugdistributions/${id}/`, { ...data })
}

export const callDeleteDrugDistribution = (id) => {
    return axios8004.delete(`/api/pharmacist/drugdistributions/${id}/`)
}

export const callAskChatbotVer1 = (data) => {
    return axios8005.post(`/api/chatbot/chatbot/ver1/ask`, { ...data })
}

export const callAskChatbotVer2 = (data) => {
    return axios8005.post(`/api/chatbot/chatbot/ver2/ask`, { ...data })
}