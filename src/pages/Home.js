import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchInput,
  SearchButtonWrapper,
} from './Home.styled';
const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setsearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Match Found for the Input Provided</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const onRadioChange = ev => {
    setsearchOption(ev.target.value);
  };
  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        onChange={onInputChange}
        placeholder="Search for Something"
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="show-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
        <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
