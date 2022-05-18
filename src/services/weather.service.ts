import axios, { Axios, AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

export class weatherService {
    static getCurrentWeather (city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`)
    }
}