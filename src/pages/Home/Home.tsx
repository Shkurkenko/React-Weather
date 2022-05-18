import React, { useEffect } from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { Days } from './components/Days/Days';
import { Popup } from '../../shared/Popup/Popup';
import { Item } from './components/ThisDayInfo/ThisDayInfo';
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';

interface Props {

}

export const Home = (props: Props) => {

    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'))
    }, []);

    return (
        <>
            <div className={s.home}>
                <div className={s.row}>
                    <ThisDay />
                    <ThisDayInfo />
                </div>
                <Days />
            </div>
        </>
    )
}