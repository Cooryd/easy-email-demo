import { IBlock, IBlockData, BasicType, components, AdvancedType } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import { merge } from 'lodash';

const { Section, Column, Image } = components;

export type IHeader = IBlockData<
  { },
  {
    href: string;
    imageUrl: string
  }
>;

export const Header: IBlock = {
  name: 'Prima Header',
  type: CustomBlocksType.HEADER,
  create(
    payload
  ) {
    const defaultData: IHeader = {
      type: CustomBlocksType.HEADER,
      data: {
        value: {
          href: 'https://www.helloprima.co.uk/',
          imageUrl: 'https://www.helloprima.co.uk/_next/static/media/prima.a26641b2.svg'
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [AdvancedType.WRAPPER ],
  render({ data } : { data: IHeader}) {
    const { imageUrl, href } = data.data.value;

    return (
      <Section border-bottom='1px solid #DDDEE1'>
        <Column>
          <Image href={href} padding="0px 0px 0px 0px" width="100px" src={imageUrl} />
        </Column>
      </Section>
    );
  },
};


export { Panel } from './Panel'