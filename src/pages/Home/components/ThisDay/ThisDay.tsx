import react from 'react';
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props {

}

export const ThisDay = (props: Props) => {
    return (
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
    )
}