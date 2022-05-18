import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { Item } from './pages/Home/components/ThisDayInfo/ThisDayInfo';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {

  const items: Item[] = [
    {
        icon_id: 'temp',
        name: 'Temperature',
        value: '20° - feels like 17°'
    },
    {
        icon_id: 'pressure',
        name: 'Pressure',
        value: '765 mmHg - normal'
    },
    {
        icon_id: 'precipitation',
        name: 'Precipitation',
        value: 'No precipitations'
    },
    {
        icon_id: 'wind',
        name: 'Wind',
        value: '3 m/s southwest - light breeze'
    },
];

  return (
    <div className="Container">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/month-statistics" element={<MonthStatistics/>}/>
      </Routes>
      {/* <Popup items={items} /> */}
    </div>
  );
} 

export default App;
