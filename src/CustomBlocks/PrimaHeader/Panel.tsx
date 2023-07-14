import React from 'react';
import { TextField, ImageUploaderField, AttributesPanelWrapper } from 'easy-email-extensions';
import { useFocusIdx, Stack } from 'easy-email-editor'

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
          <Stack vertical>
            <TextField
              label='Link'
              name={`${focusIdx}.data.value.href`}
              inline
              alignment='center'
            />
            <ImageUploaderField
              label='Logo'
              name={`${focusIdx}.data.value.imageUrl`}
              inline
              alignment='center'
            />
          </Stack>
    </AttributesPanelWrapper>

  );
}
