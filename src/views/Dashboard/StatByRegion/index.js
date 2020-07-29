import React from 'react';
import { Card } from '@material-ui/core';
import USAMap from 'react-usa-map';

const StatByRegion = () => {
  return (
    <div>
      <Card>
        <USAMap width={580} height={420} />
      </Card>
    </div>
  );
};

export default StatByRegion;
