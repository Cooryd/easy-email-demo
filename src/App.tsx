/* eslint-disable react/jsx-wrap-multilines */
import React, { useMemo } from 'react';

import {
  EmailEditor,
  EmailEditorProvider,
  IEmailTemplate,
  BlockAvatarWrapper
} from 'easy-email-editor';
import 'easy-email-editor/lib/style.css';

import templateData from './template.json'
import { AdvancedType, BasicType } from 'easy-email-core';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme-purple/css/arco.css';
import {useWindowSize} from 'react-use'

import './CustomBlocks';
import { CustomBlocksType } from './CustomBlocks/constants';

const categories: ExtensionProps['categories'] = [
  {
    label: 'Custom',
    active:true,
    blocks: [
      {
        type: CustomBlocksType.HEADER
      },
      {
        type: CustomBlocksType.CONDITIONAL_BLOCK
      }
    ]
  },
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.ACCORDION
      },
      {
        type: AdvancedType.BUTTON
      },
      {
        type: AdvancedType.CAROUSEL
      },
      {
        type: AdvancedType.COLUMN
      },
      {
        type: AdvancedType.DIVIDER
      },
      {
        type: AdvancedType.GROUP
      },
      {
        type: AdvancedType.HERO
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.NAVBAR
      },
      {
        type: AdvancedType.SECTION
      },
      {
        type: AdvancedType.SPACER
      },
      {
        type: AdvancedType.TEXT
      },
      {
        type: AdvancedType.WRAPPER
      },
      {
        type: BasicType.RAW
      }
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      {
        title: 'Single',
        payload: [['100%']]
      },
      {
        title: '2 columns',
        payload: [
          ['50%', '50%'],
          ['33%', '67%'],
          ['67%', '33%'],
          ['25%', '75%'],
          ['75%', '25%'],
        ],
      },
      {
        title: '3 columns',
        payload: [
          ['33.33%', '33.33%', '33.33%'],
          ['25%', '25%', '50%'],
          ['50%', '25%', '25%'],
        ],
      },
      {
        title: '4 columns',
        payload: [[['25%', '25%', '25%', '25%']]],
      },
    ],
  },
];

export default function Editor() {
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  const initialValues: IEmailTemplate | null = useMemo(() => {
    return {
      subject: 'Welcome to Easy-email',
      subTitle: 'Nice to meet you!',
      content: templateData
    };
  }, []);


  if (!initialValues) return null;

  return (
      <EmailEditorProvider
        dashed={false}
        data={initialValues}
        height={'calc(100vh - 85px)'}
        autoComplete
      >
        {({ values }, { submit }) => {
          return (
          <StandardLayout
            compact={!smallScene}
            categories={categories}
            showSourceCode={true}
          >
            <EmailEditor />
          </StandardLayout>
          );
        }}
      </EmailEditorProvider>
  );
}
