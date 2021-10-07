import { Composition } from '@uniformdev/canvas-react';
import { SampleLayout } from '../components/SampleLayout';
import { resolveRenderer } from '../lib/resolveRenderer';

export default function Home({ composition }) {
  return (
    <Composition data={composition} resolveRenderer={resolveRenderer}>
      {() => ( <SampleLayout></SampleLayout>)}
    </Composition>
  );
}

export { getStaticProps } from '../lib/getStaticProps';