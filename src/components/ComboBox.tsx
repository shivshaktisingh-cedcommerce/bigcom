import * as React from 'react';
import { FunctionComponent, SyntheticEvent } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import _ from 'lodash';
import { Box, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface CrmComboBoxType {
  id: number;
  name: string;
  data?: any;
}

interface OwnProps {
  loading: boolean;
  multiple?: boolean;
  label: string;
  error?: string;
  options: CrmComboBoxType[];
  values: CrmComboBoxType | CrmComboBoxType[] | null;
  onInputChange?: (value: string) => void;
  onChange: (value: CrmComboBoxType | CrmComboBoxType[] | null) => void;
  inputSearchValue?: string;
  scrolledToBottomCallback?: () => void;

  [x: string]:
    | boolean
    | null
    | number[]
    | boolean
    | string
    | number
    | undefined
    | CrmComboBoxType
    | CrmComboBoxType[]
    | ((...args: never[]) => void);
}

type Props = OwnProps;

const ComboBox: FunctionComponent<Props> = ({
  loading = false,
  multiple = false,
  label,
  options,
  values,
  onChange,
  onInputChange,
  error = null,
  inputSearchValue,
  scrolledToBottomCallback,
}) => {
  const { t } = useTranslation();
  const getOptions = () => {
    if (values !== null) {
      if (Array.isArray(values)) {
        values.forEach(function (v) {
          const findValueInOption = options.find(item => item.id === v.id);

          if (findValueInOption === undefined) {
            options.push(v);
          }
        });

        return options;
      } else {
        const findValueInOption = options.find(item => item.id === values.id);
        if (findValueInOption === undefined) {
          options.push(values);
        }

        return options;
      }
    }

    return options;
  };
  const getValue = (): CrmComboBoxType[] | CrmComboBoxType | null => {
    if (values === undefined) {
      return null;
    }

    if (multiple && Array.isArray(values)) {
      const result = values.map(v => v.id);

      return _.filter(options, function (o) {
        return result.includes(o.id);
      });
    } else {
      if (values !== null && 'id' in values) {
        const index = options.findIndex(x => x.id === values.id);

        return options[index];
      }
    }

    return null;
  };

  const onChangeCombobox = (
    event: SyntheticEvent<Element, Event>,
    value: CrmComboBoxType | CrmComboBoxType[] | null
  ) => {
    if (Array.isArray(values)) {
      onChange(value);
      if (onInputChange) {
        onInputChange('');
      }
    } else {
      onChange(value);
      if (onInputChange) {
        // @ts-ignore
        onInputChange(value !== null ? value.label : '');
      }
    }
  };

  const onInputChangeCombo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <>
      {label ? <label className='inline-block py-3'>{label}</label> : null}
      <Autocomplete
        loading
        inputValue={inputSearchValue}
        value={getValue()}
        multiple={multiple}
        id='tags-standard'
        options={getOptions()}
        getOptionLabel={option => option.name}
        onChange={(event, value) => onChangeCombobox(event, value)}
        ListboxProps={{
          onScroll: (event: React.SyntheticEvent) => {
            const listboxNode = event.currentTarget;
            if (
              listboxNode.scrollTop + listboxNode.clientHeight ===
              listboxNode.scrollHeight
            ) {
              scrolledToBottomCallback && scrolledToBottomCallback();
            }
          },
        }}
        loadingText={t('loading')}
        renderInput={params => (
          <>
            <TextField
              key={params.id}
              {...params}
              label=''
              error={!!error}
              placeholder={label}
              onChange={onInputChangeCombo}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          </>
        )}
      />
      {error ? (
        <Box sx={{ color: 'red', m: '8px 14px 0px;', fontSize: '0.75rem;' }}>
          {error}
        </Box>
      ) : null}
    </>
  );
};

export default ComboBox;
