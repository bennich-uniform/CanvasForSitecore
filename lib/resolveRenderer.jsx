import { SampleSublayout } from '../components/SampleSublayout';
import { SampleInnerSublayout } from '../components/SampleInnerSublayout';
import { SampleRendering } from '../components/SampleRendering';

export const resolveRenderer = (component) => {
  // notice this is Public ID, not Component Name - and it is case-sensitive
  if (component.type === 'sampleSublayout') {
    return SampleSublayout;
  }

  if (component.type === 'sampleInnerSublayout') {
    return SampleInnerSublayout;
  }

  if (component.type === 'sampleRendering') {
    return SampleRendering;
  }

  throw new Error(`Component is not registered: ${component.type}`);
};