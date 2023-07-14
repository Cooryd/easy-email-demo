import React from 'react';
import { TextField, AttributesPanelWrapper } from 'easy-email-extensions';
import { useFocusIdx, Stack } from 'easy-email-editor'

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
          <Stack vertical>
            <TextField
              label='Condition'
              name={`${focusIdx}.data.value.condition`}
              inline
              alignment='center'
            />
            </Stack>
    </AttributesPanelWrapper>

  );
}
