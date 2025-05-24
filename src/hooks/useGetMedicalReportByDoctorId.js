

import { callGetMedicalReportsByDoctorId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetMedicalReportsByDoctorId = (doctorId) => {
    const [medicalReports, setMedicalReports] = useState([])
    const [loading, setLoading] = useState(true)

    const getMedicalReports = async (id) => {
        try {
            const res = await callGetMedicalReportsByDoctorId(id || doctorId)
            if (res) {
                setMedicalReports(res)
            }
            setLoading(false)
        } catch (error) {
            toast.error(
                `Mất kết nối`,
                {
                    position: "bottom-right",
                }
            );
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (doctorId) {
            getMedicalReports(doctorId)
        }
    }, [doctorId])

    return { loading, medicalReports, getMedicalReports }
}

export default useGetMedicalReportsByDoctorId