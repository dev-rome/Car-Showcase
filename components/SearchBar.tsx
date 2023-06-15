"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { SearchBarProps } from "@/types";

const SearchButton = ({ searchButtonClasses }: { searchButtonClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${searchButtonClasses}`}>
    <Image
      src={"/images/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({ setManuFacturer, setModel }: SearchBarProps) => {
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "")
      return alert("Please provide some input");

    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton searchButtonClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/images/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton searchButtonClasses='sm:hidden' />
      </div>
      <SearchButton searchButtonClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
