"use client";

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({
  searchButtonClasses,
}: {
  searchButtonClasses: string;
}) => (
  <button type="submit" className={`-ml-3 z-10 ${searchButtonClasses}`}>
    <Image
      src="/images/magnifying-glass.svg"
      alt="Magnifying Glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton searchButtonClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/images/model-icon.png"
          alt="Car Model"
          width={25}
          height={25}
          className="absolute w-[1.25rem] h-[1.25rem] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton searchButtonClasses="sm:hidden" />
      </div>
      <SearchButton searchButtonClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
