import { EnhancerBuilder, enhance } from '@uniformdev/canvas';
import { getPageInfo, getItem } from '@uniformdev/canvas-sitecore';
import { parseUniformServerConfig } from '@uniformdev/common-server';
import { noopLogger } from '@uniformdev/common-client';

// read configuration and prepare
const config = parseUniformServerConfig(process.env, noopLogger, true);

export async function enhanceComposition({ composition, context }) {
   const sitecoreItemEnhancer = async ({ parameter }) => {
     const id = parameter.value.replace( /[{}]/g, '' );
         return await getItem({ id, config, isPreview: false });
     }
  
  const enhancers = new EnhancerBuilder()
  .parameterType('sitecoreItem', sitecoreItemEnhancer);
  await enhance({ composition, enhancers });
}