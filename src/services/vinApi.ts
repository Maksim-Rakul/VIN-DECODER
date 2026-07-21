import axios from "axios";
import type { Vin } from "../types/vin";
import type { Variable } from "../types/variables";

const api = axios.create({
    baseURL: 'https://vpic.nhtsa.dot.gov/api'
})

interface DecodeVinResponse {
    Results: Vin[]
}

interface VariablesListResponse {
    Results: Variable[]
}

export const decodeVin = async (vin: string): Promise<DecodeVinResponse> => {
    const res = await api.get<DecodeVinResponse>(`/vehicles/DecodeVin/${vin}?format=json&modelyear=2011`)

    return (res.data);
}

export const getVariables = async () => {
    const res = await api.get<VariablesListResponse>(`/vehicles/getvehiclevariablelist?format=json`)

    return res.data
}

export const getVariablesByID = async (id: string) => {
    const res = await api.get<VariablesListResponse>(`/vehicles/GetVehicleVariableValuesList/${id}?format=json`)

    console.log(res.data)
}