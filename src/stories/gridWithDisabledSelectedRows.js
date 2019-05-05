import React from 'react';

import { storiesOf } from '@storybook/react';

import {GridWithPreselectedRows} from '../examples/GridWithPreselectedRows';


storiesOf('Grid With Preselected Disabled Rows', module)
  .add('example 1', () => <GridWithPreselectedRows />)
  
