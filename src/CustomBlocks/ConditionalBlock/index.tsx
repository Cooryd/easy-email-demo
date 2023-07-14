import { IBlock, IBlockData, BasicType, components, AdvancedType } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import { merge } from 'lodash';

const { Raw, MjmlBlock } = components;

export type IConditionalBlock = IBlockData<
  { },
  {
    condition: string;
  }
>;

export const ConditionalBlock: IBlock = {
  name: 'Conditional Block',
  type: CustomBlocksType.CONDITIONAL_BLOCK,
  create(
    payload
  ) {
    const defaultData: IConditionalBlock = {
      type: CustomBlocksType.CONDITIONAL_BLOCK,
      data: {
        value: {
            condition: 'user === "my_user_name"',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER ],
  render({ data, children }) {
    const { condition } = data.data.value;

    return (
      <>
        <Raw>{`<% if (${condition}) { %><!-- htmlmin:ignore -->`}</Raw>
            <MjmlBlock type="group"></MjmlBlock>
        <Raw>{`<!-- htmlmin:ignore --><% } %><!-- htmlmin:ignore -->`}</Raw>
      </>
    );
  },
};


export { Panel } from './Panel'