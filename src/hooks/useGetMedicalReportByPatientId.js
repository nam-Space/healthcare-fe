
import { callGetMedicalReportsByPatientId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetMedicalReportsByPatientId = (patientId) => {
    const [medicalReports, setMedicalReports] = useState([])
    const [loading, setLoading] = useState(true)

    const getMedicalReports = async (id) => {
        try {
            const res = await callGetMedicalReportsByPatientId(id || patientId)
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
        if (patientId) {
            getMedicalReports(patientId)
        }
    }, [patientId])

    return { loading, medicalReports, setMedicalReports, getMedicalReports }
}

export default useGetMedicalReportsByPatientId