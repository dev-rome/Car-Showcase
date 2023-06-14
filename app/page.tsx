import Image from "next/image";

import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { getCars } from "@/utils";

export default async function Home() {
  const cars = await getCars();

  const isEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
