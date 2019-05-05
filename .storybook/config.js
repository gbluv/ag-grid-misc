import { configure } from '@storybook/react';
import interopRequireDefault from 'jest-util/build/interopRequireDefault';

function loadStories() {
  require('../src/stories/gridWithDisabledSelectedRows')
}

configure(loadStories, module);
