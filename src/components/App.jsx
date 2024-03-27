import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
//import components(look up)************************************
import "./App.css";
import { useEffect, useState } from "react";

import Modal from "react-modal";

import { requestImages } from "../services/api";

function App() {
  //**/**************************************** 3 first state*/ */
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  /**********************************************3 first state */

  /*state for pages **********************/
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  /*state for button "loadmore**********" */
  const [loadBtn, setLoadBtn] = useState(false);

  /*state for modal */
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  /*Function for FORM*/
  const handleSearch = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };
  /*Function for FORM*/
  /*Function add page */
  const handleLoad = () => {
    setPage(page + 1);
  };
  /*Function add page */

  /*add modal */
  Modal.setAppElement("#root");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data, total } = await requestImages(query, page);
        console.log(page);
        setImages((prevImg) => {
          return [...prevImg, ...data];
        });

        setLoadBtn(page >= 1);
        // if (images.length >= 1 ) {
        //   setLoadBtn(true);
        // }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await requestImages(images, page);
  //       if (Array.isArray(data) && data.length > 0) {
  //         setSlides(data);
  //       }
  //     } catch (err) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [images, page]);

  return (
    <>
      <h1>HERE WE ARE</h1>
      <SearchBar onAdd={handleSearch} />
      <ImageGallery openModal={openModal} images={images} />
      {loadBtn && images.length > 0 && <LoadMoreBtn handleLoad={handleLoad} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
