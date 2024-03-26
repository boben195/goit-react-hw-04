import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
//import components(look up)************************************
import "./App.css";
import { useEffect, useState } from "react";

import { requestImages } from "../services/api";

function App() {
  //**/**************************************** 3 first state*/ */
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  /**********************************************3 first state */
  const [slides, setSlides] = useState([]);
  /*state for pages **********************/
  const [page, setPage] = useState(1);

  /*Function for FORM*/
  const handleSearch = (query) => {
    setImages(query);
    setPage(1);
  };
  /*Function for FORM*/

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await requestImages(images, page);
        if (Array.isArray(data) && data.length > 0) {
          setSlides(data);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [images, page]);

  return (
    <>
      <h1>HERE WE ARE</h1>
      <SearchBar onAdd={handleSearch} />
      <ImageGallery slides={slides} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
