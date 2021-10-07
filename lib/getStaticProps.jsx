// private @uniformdev npm packages
import { throwException } from '@uniformdev/common';
import { parseUniformServerConfig } from '@uniformdev/common-server';
import { noopLogger } from '@uniformdev/common-client';
import { getPageInfo, getItem } from '@uniformdev/canvas-sitecore';

// public @uniformdev npm package
import { CanvasClient, CANVAS_PUBLISHED_STATE } from '@uniformdev/canvas';

// read configuration and prepare
const config = parseUniformServerConfig(process.env, noopLogger, true);

import { enhanceComposition } from './enhanceComposition';

export async function getStaticProps(context) {
  const slug = '/';

  // create the canvas client
  const client = new CanvasClient({
    apiKey: config.env.UNIFORM_API_KEY ?? throwException('The UNIFORM_API_KEY environment variable is missing'),
    projectId: config.env.UNIFORM_PROJECT_ID ?? throwException('The UNIFORM_PROJECT_ID environment variable is missing'),
    apiHost: 'https://uniform.app',
  });

  const { composition } = await client.getCompositionById({

    //
    //  for simplicity of this tutorial, let's hardcode composition id here
    //
    compositionId: '390015d1-a117-49dc-a4c4-280005bee388',

    state: CANVAS_PUBLISHED_STATE
  });

  await enhanceComposition({ composition, });

  // set `composition` as a prop to the route
  return {
    props: {
      composition,
    },
  };
}