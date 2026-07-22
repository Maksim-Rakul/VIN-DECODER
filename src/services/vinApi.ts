import axios from "axios";
import type { Vin } from "../types/vin";
import type { Variable, VariableById } from "../types/variables";

const api = axios.create({
    baseURL: 'https://vpic.nhtsa.dot.gov/api'
})

interface DecodeVinResponse {
    Results: Vin[]
}

interface VariablesListResponse {
    Results: Variable[]
}

interface VariableByIdResponse {
    Results: VariableById[]
}

export const decodeVin = async (vin: string): Promise<DecodeVinResponse> => {
    const res = await api.get<DecodeVinResponse>(`/vehicles/DecodeVin/${vin}?format=json`)

    return (res.data);
}

export const getVariables = async () => {
    const res = await api.get<VariablesListResponse>(`/vehicles/getvehiclevariablelist?format=json`)

    return res.data
}

export const getVariablesByID = async (id: number): Promise<VariableById | null> => {
    const res = await api.get<VariableByIdResponse>(`/vehicles/GetVehicleVariableValuesList/${id}?format=json`)

    const findById = res.data.Results.find((v) => v.Id === id)


    if (!findById) return null
    
    console.log(findById);
    
    return findById
}