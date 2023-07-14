import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';
import { CustomBlocksType } from './constants';
import { Header, Panel as HeaderPanel } from './PrimaHeader';
import { ConditionalBlock, Panel as ConditionalBlockPanel } from './ConditionalBlock';

BlockManager.registerBlocks({ 
  [CustomBlocksType.HEADER]: Header,
  [CustomBlocksType.CONDITIONAL_BLOCK]: ConditionalBlock,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.HEADER]: HeaderPanel,
  [CustomBlocksType.CONDITIONAL_BLOCK]: ConditionalBlockPanel,
});



