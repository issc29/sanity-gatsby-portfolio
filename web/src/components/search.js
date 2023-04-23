import React, { useState, useEffect } from "react";
import 'react-h5-audio-player/lib/styles.css';
import ClassContainer from "../components/ClassContainer";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, CurrentRefinements, HierarchicalMenu, Pagination } from 'react-instantsearch-hooks-web';
import DropdownSort from "../components/dropdown-sort";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import CustomSortBy from "./custom-sort-by";
import { isMobile } from 'react-device-detect';


const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);



const Search = props => {
  const algoliaIndex = (process.env.ALGOLIA_INDEX) ?  process.env.ALGOLIA_INDEX : `Tracks_DEV`
  const [sort, setSort] = useState("classNumber")
  const [descendingSort, setDescendingSort] = useState(true)

  function handleClickSortOrder(e){
    e.preventDefault();
    setDescendingSort(!descendingSort)
  }

  
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={algoliaIndex} routing={true}>
        

        <SearchBox classNames={{
          root:'w-full relative whitespace-nowrap ', 
          input: 'w-full py-2 px-4 shadow rounded', 
          submitIcon:'fill-dark-blue w-3.5 h-3.5', 
          submit:'absolute m-3.5 right-0',
          resetIcon: 'fill-rose-500 w-3.5 h-3.5',
          reset: 'right-8 absolute m-3.5'}} 
          placeholder="Search Classes"
          />
        <CurrentRefinements 
            classNames={{
              root: 'flex min-h-[36px]',
              item:'bg-dark-blue rounded-md pr-1.5 m-1.5 text-white flex px-1.5',
              label: 'pr-1.5',
              delete: 'pl-1.5'
            }}
            transformItems={(items) => {

              return items.map((item) => {item.label="Category"; return item})
              }}
          />
          <div className="sm:hidden ">
          <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-blue px-4 py-2 text-left text-xl  hover:bg-dark-blue focus:outline-none focus-visible:ring focus-visible:ring-dark-blue focus-visible:ring-opacity-75 mb-3">
              <span className="text-white">Categories</span>
                <ChevronUpIcon className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`} />
              </Disclosure.Button>
              <Disclosure.Panel>
              <HierarchicalMenu
              attributes={[
                'categories.level0',
                'categories.level1',
                'categories.level2',
                'categories.level3',
              ]} 
              classNames={{
                root: 'sm:hidden flex-none min-w-[150px] pr-3 my-4',
                count: 'bg-[#dfe2ee] rounded-lg py-0.5 px-1.5 ml-2',
                list: 'ml-4 text-gray-700',
                selectedItem: 'text-dark-blue'
              }}
            />
              </Disclosure.Panel>
            </>
          )}
          </Disclosure>
        </div>
        <div className="w-full flex justify-end">
            <CustomSortBy />
        </div>
        <div className="flex">
          <HierarchicalMenu
            attributes={[
              'categories.level0',
              'categories.level1',
              'categories.level2',
              'categories.level3',
            ]} 
            classNames={{
              root: 'hidden sm:flex flex-none pr-3 my-4',
              count: 'bg-[#dfe2ee] rounded-lg py-0.5 px-1.5 ml-2',
              list: 'ml-4 text-gray-700',
              selectedItem: 'text-dark-blue'
            }}
          />
          <div>
            <div className="flex">
              <Hits 
                hitComponent={ ({ hit }) => <ClassContainer hit={hit} setAudioSrc={props.setAudioSrc} algoliaIndex={algoliaIndex} setPlay={props.setPlay}/>} 
                classNames={{root:'flex-auto'}} 
              />
            </div>
            <Pagination 
              padding={(isMobile) ? 1 : 3}
              classNames={{
                root: 'text-dark-blue leading-none',
                list: 'flex justify-center',
                item: 'mx-0.5 py-1.5 rounded hover:bg-gray-400 hover:text-white' ,
                selectedItem: 'bg-dark-blue text-white',
                link: 'cursor-pointer py-1.5 px-3 ',
              }}
            />
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}

export default Search;