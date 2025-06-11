import React from "react";
import 'react-h5-audio-player/lib/styles.css';
import ClassContainer from "../components/ClassContainer";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, CurrentRefinements, HierarchicalMenu, Pagination } from 'react-instantsearch-hooks-web';
import DropdownSort from "../components/dropdown-sort";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import CustomSortBy from "./custom-sort-by";
import { isMobile } from 'react-device-detect';
import { sortHierarchicalMenu } from "../lib/helpers";

// Constants
const ALGOLIA_INDEX = process.env.GATSBY_ALGOLIA_INDEX || 'Tracks_DEV';
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

// Styles
const styles = {
  searchBox: {
    root: 'w-full relative whitespace-nowrap',
    input: 'w-full py-2 px-4 shadow rounded',
    submitIcon: 'fill-dark-blue w-3.5 h-3.5',
    submit: 'absolute m-3.5 right-0',
    resetIcon: 'fill-rose-500 w-3.5 h-3.5',
    reset: 'right-8 absolute m-3.5'
  },
  currentRefinements: {
    root: 'flex min-h-[36px]',
    item: 'bg-dark-blue rounded-md pr-1.5 m-1.5 text-white flex px-1.5',
    label: 'pr-1.5',
    delete: 'pl-1.5'
  },
  hierarchicalMenu: {
    root: 'hidden sm:flex flex-none pr-3 my-4',
    count: 'bg-[#dfe2ee] rounded-lg py-0.5 px-1.5 ml-2',
    list: 'ml-4 text-gray-700',
    selectedItem: 'text-dark-blue'
  },
  mobileHierarchicalMenu: {
    root: 'sm:hidden flex-none min-w-[150px] pr-3 my-4',
    count: 'bg-[#dfe2ee] rounded-lg py-0.5 px-1.5 ml-2',
    list: 'ml-4 text-gray-700',
    selectedItem: 'text-dark-blue'
  },
  pagination: {
    root: 'text-dark-blue leading-none',
    list: 'flex justify-center',
    item: 'mx-0.5 py-1.5 rounded hover:bg-gray-400 hover:text-white',
    selectedItem: 'bg-dark-blue text-white',
    link: 'cursor-pointer py-1.5 px-3'
  }
};

// Components
const CategoryDisclosure = () => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-blue px-4 py-2 text-left text-xl hover:bg-dark-blue focus:outline-none focus-visible:ring focus-visible:ring-dark-blue focus-visible:ring-opacity-75 mb-3">
          <span className="text-white">Categories</span>
          <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`} />
        </Disclosure.Button>
        <Disclosure.Panel>
          <HierarchicalMenu
            limit={30}
            attributes={[
              'categories.level0',
              'categories.level1',
              'categories.level2',
              'categories.level3',
            ]}
            classNames={styles.mobileHierarchicalMenu}
          />
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

const SearchResults = ({ setAudioSrc, setPlay }) => (
  <div>
    <div className="flex">
      <Hits
        hitComponent={({ hit }) => (
          <ClassContainer
            hit={hit}
            setAudioSrc={setAudioSrc}
            algoliaIndex={ALGOLIA_INDEX}
            setPlay={setPlay}
          />
        )}
        classNames={{ root: 'flex-auto' }}
      />
    </div>
    <Pagination
      padding={isMobile ? 1 : 3}
      classNames={styles.pagination}
    />
  </div>
);

const Search = ({ setAudioSrc, setPlay }) => {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX} routing={true}>
        <SearchBox
          classNames={styles.searchBox}
          placeholder="Search Classes"
        />
        
        <CurrentRefinements
          classNames={styles.currentRefinements}
          transformItems={(items) => items.map((item) => ({ ...item, label: "Category" }))}
        />

        <div className="sm:hidden">
          <CategoryDisclosure />
        </div>

        <div className="w-full flex justify-end">
          <CustomSortBy />
        </div>

        <div className="flex">
          <HierarchicalMenu
            limit={30}
            attributes={[
              'categories.level0',
              'categories.level1',
              'categories.level2',
              'categories.level3',
            ]}
            classNames={styles.hierarchicalMenu}
            sortBy={sortHierarchicalMenu}
          />
          <SearchResults setAudioSrc={setAudioSrc} setPlay={setPlay} />
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search;