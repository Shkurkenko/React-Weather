import React from 'react';
import s from './Days.module.scss';

interface Props {};

interface Tab {
    value: string;
}

export const Tabs = (props: Props) => {

    const tabs: Tab[] = [
        {
            value: 'On the week',
        },
        {
            value: 'On 10 days',
        },
        {
            value: 'On the month',
        }
    ];

    return (
        <div className={s.tabs}>
            <div className={s.tab__wrapper}>
                {
                    tabs.map((tab: Tab) => {
                        return <div className={s.tab} key={tab.value}>{tab.value}</div>
                    })
                }
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    )
}