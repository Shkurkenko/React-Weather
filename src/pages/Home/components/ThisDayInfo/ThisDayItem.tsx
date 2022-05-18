import react from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';

interface Props {
    item: Item;
}

export const ThisDayItem = ({ item }: Props) => {
    const { icon_id, name, value } = item;
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    )
};