import React from 'react';
import { Map as YMap, Placemark, YMaps } from 'react-yandex-maps';

export interface MapProps {}

const DEFAULT_COORDS = [56.862486, 60.669802];

export let Map: React.FC<MapProps> = () => {
  return (
    <div>
      <YMaps>
        <YMap defaultState={{ center: DEFAULT_COORDS, zoom: 16 }} width={500} height={500}>
          <Placemark geometry={DEFAULT_COORDS} />
        </YMap>
      </YMaps>
    </div>
  );
};
