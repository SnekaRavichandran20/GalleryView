import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Option,
  OptionBlock,
  OptionField,
  Span,
} from './DropDownInputStyle';
import Data from '../../Data/Data.json';

interface Props {
  handler: any;
  type: string;
  country?: string;
  state?: string;
  district?: string;
}

// for the dropdown to select open or in progress or completed status
const DropDownInput: React.FC<Props> = ({
  handler,
  type,
  country,
  state,
  district,
}) => {
  const [value, setValue] = useState('');
  const [option, setOption] = useState(false);
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === 'country' && country === '') {
      setValue('');
    } else if (type === 'state' && state === '') {
      setValue('');
    } else if (district === '') {
      setValue('');
    }
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (reference.current && !reference.current.contains(e.target)) {
        setOption(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [setValue, country, state, district, type]);

  const optionhandler = (optionvalue: string) => {
    setValue(optionvalue);
    handler(optionvalue);
    setOption(!option);
  };
  return (
    <Span>
      <Button onClick={() => setOption(!option)}>
        {value === ''
          ? type === 'country'
            ? 'Select a country'
            : type === 'state'
            ? 'Select a state'
            : 'Select a district'
          : value}
      </Button>
      <OptionField ref={reference}>
        {option ? (
          <OptionBlock>
            {type === 'country'
              ? Data.map((d) => {
                  return (
                    <Option onClick={() => optionhandler(d.country)}>
                      {d.country}
                    </Option>
                  );
                })
              : type === 'state'
              ? Data.map((d) => {
                  if (d.country === country || country === '') {
                    return d.state.map((state) => {
                      return (
                        <Option onClick={() => optionhandler(state.statename)}>
                          {state.statename}
                        </Option>
                      );
                    });
                  }
                  else return "";
                })
              : Data.map((d) => {
                  if (d.country === country || country === '') {
                    return d.state.map((s) => {
                      if (s.statename === state || state === '') {
                        return s.district.map((district) => {
                          return (
                            <Option
                              onClick={() => optionhandler(district.name)}
                            >
                              {district.name}
                            </Option>
                          );
                        });
                      }
                      else return "";
                    });
                  }
                  else return "";
                })}
          </OptionBlock>
        ) : (
          ''
        )}
      </OptionField>
    </Span>
  );
};

export default DropDownInput;
