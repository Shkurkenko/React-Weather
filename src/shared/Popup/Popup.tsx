import React from 'react'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Popup.module.scss';

interface Props {
    items: Item[];
};

export const Popup = ({ items }: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.popup}>
                <div className={s.this__day}>
                    <div className={s.top__block}>
                        <div className={s.this__temp}>20°</div>
                        <GlobalSvgSelector id="Sun" />
                    </div>
                    <div className={s.bottom__block}>
                        <div className={s.this__day_day}>Today</div>
                        <div className={s.this__time}>Time: <span>21:54</span></div>
                        <div className={s.this__city}>City: <span>Saint-Petersburg</span></div>
                    </div>
                </div>
                <div className={s.this__day_info}>
                    <div className={s.this__day_info_items}>
                        {items.map((item: Item) => {
                            return <ThisDayItem item={item} />
                        })}
                    </div>
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </div>
    )
}