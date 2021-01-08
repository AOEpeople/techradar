import React from 'react';
import ReactDOM from 'react-dom';
import App from 'aoe_technology_radar/src/components/App';
import 'aoe_technology_radar/src/index.scss';
import {Item} from "aoe_technology_radar/src/model";
import radardata from './rd.json';

ReactDOM.render(
    <React.StrictMode>
        <App items={radardata.items as Item[]} releases={radardata.releases as string[]} />
    </React.StrictMode>,
    document.getElementById('root')
);
