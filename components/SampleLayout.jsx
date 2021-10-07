import { Slot } from '@uniformdev/canvas-react';
import Head from 'next/head';

export function SampleLayout() {
  return (
    <>
      <Head>
        <title>Welcome to Sitecore</title>
      </Head>
      <div id="MainPanel">
        <Slot name="main"></Slot>
      </div>
    </>
  );
}