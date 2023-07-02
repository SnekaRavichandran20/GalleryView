import React, { useState } from 'react';
import {
  HomePage,
  ImageContainer,
  ImageCard,
  DropDownOption,
  ImageScroll,
  SelectedCard,
  SelectedOptions,
  Span,
  ImageDiv,
} from './HomeStyle';
import { Images } from '../../Data/Images/Images';
import DropDownInput from '../../Components/DropDownInput/DropDownInput';

const Home = () => {
  const [countryvalue, setcountryvalue] = useState('');
  const [statevalue, setstatevalue] = useState('');
  const [districtvalue, setdistrictvalue] = useState('');
  const [keyvalue, setkeyvalue] = useState(Images[0].source);
  const [flag, setflag] = useState(true);

  // for clearing the state, country and district value
  const cleardistrict = () => {
    setdistrictvalue('');
  };

  const clearstate = () => {
    setstatevalue('');
    cleardistrict();
  };

  const clearcountry = () => {
    setcountryvalue('');
    clearstate();
  };

  // for setting the state, country and district value
  const setdistrict = (value: string) => {
    setdistrictvalue(value);
    setflag(true);
  };

  const setstate = (value: string) => {
    setstatevalue(value);
    setflag(true);
  };

  const setcountry = (value: string) => {
    setcountryvalue(value);
    setflag(true);
  };

  return (
    <HomePage>
      <DropDownOption>
        {/* dropdown for country */}
        <DropDownInput
          type="country"
          country={countryvalue}
          handler={setcountry}
        ></DropDownInput>
        {countryvalue !== '' ? (
          // dropdown for state and will be displayed only if country value is selected.
          <DropDownInput
            type="state"
            state={statevalue}
            country={countryvalue}
            handler={setstate}
          ></DropDownInput>
        ) : (
          ''
        )}
        {statevalue !== '' ? (
          // dropdown for district and will be displayed only if state value is selected.
          <DropDownInput
            type="district"
            country={countryvalue}
            district={districtvalue}
            state={statevalue}
            handler={setdistrict}
          ></DropDownInput>
        ) : (
          ''
        )}
      </DropDownOption>
      {/* the selected values of country, state and district will be displayed by the following code */}
      <SelectedOptions>
        {countryvalue !== '' ? (
          <SelectedCard>
            {countryvalue}
            <Span onClick={clearcountry}>X</Span>
          </SelectedCard>
        ) : (
          ''
        )}
        {statevalue !== '' ? (
          <SelectedCard>
            {statevalue}
            <Span onClick={clearstate}>X</Span>
          </SelectedCard>
        ) : (
          ''
        )}
        {districtvalue !== '' ? (
          <SelectedCard>
            {districtvalue}
            <Span onClick={cleardistrict}>X</Span>
          </SelectedCard>
        ) : (
          ''
        )}
      </SelectedOptions>
      <ImageDiv>
        {/* the image container where one  selected image will be displayed in medium size */}
        <ImageContainer>
          <img src={keyvalue} alt="Place" width="100%" height="100%" />
        </ImageContainer>

        <ImageScroll>
          {Images.map((image) => {
            if (
              image.value.indexOf(countryvalue.toLowerCase()) > -1 &&
              image.value.indexOf(statevalue.toLowerCase()) > -1 &&
              image.value.indexOf(districtvalue.toLowerCase()) > -1
            ) {
              if(flag === true){
                setkeyvalue(image.source)
                setflag(false)
              }
              return (
                <ImageCard onClick={() => setkeyvalue(image.source)}>
                  <img src={image.source} alt={image.value} height="100px" />
                </ImageCard>
              );
            }
            else {
              return "";
            }
          })}
        </ImageScroll>
      </ImageDiv>
    </HomePage>
  );
};

export default Home;
