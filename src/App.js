import logo from "./logo.svg";
import "./App.css";
import nw from "../src/Api/CONTENTLISTINGPAGE-PAGE1.json";
import { useEffect, useState, useRef } from "react";
import img1 from "../src/assets/posterthatismissing.png";
function App() {
  // console.log(nw, "new");
  const [searchall, setsearch] = useState([]);
  const [page1, setpage1] = useState(1);
  const [alldata, setalldata] = useState([]);
  const [data, setdata] = useState([]);
  const [keyvaldata, setKeyvaldata] = useState([]);
  // console.log(data, "page1");
  const listInnerRef = useRef();
  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     console.log(scrollTop, scrollHeight, clientHeight);
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       alert("nirmal");
  //     }
  //   }
  // };
  useEffect(() => {
    let pagenew = [1, 2, 3];
    var dataall = [];
    for (let i = 0; i < pagenew.length; i++) {
      const data1 = require(`../src/Api/CONTENTLISTINGPAGE-PAGE${pagenew[i]}.json`);
      const ott = data1.page["content-items"].content.map((imgname) => {
        return {
          name: imgname["name"],
          "poster-image": imgname["poster-image"],
        };
      });
      setalldata((prev) => [...prev, ...ott]);
    }
  });
  useEffect(() => {
    const data1 = require(`../src/Api/CONTENTLISTINGPAGE-PAGE${page1}.json`);
    // setdata(data1.page["content-items"].content);
    const keyvalue = data1.page["page-num-requested"];
    const ott = data1.page["content-items"].content.map((imgname) => {
      return {
        name: imgname["name"],
        "poster-image": imgname["poster-image"],
      };
    });
    console.log(keyvaldata);
    if (!keyvaldata.includes(keyvalue)) {
      console.log(keyvaldata, keyvalue);
      setKeyvaldata((prev) => [...prev, keyvalue]);
      setdata((prev) => [...prev, ...ott]);
    }
  }, [page1]);
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (document.documentElement.scrollTop > 700) {
        // alert("nirmal");
        setpage1(2);
      }
      if (document.documentElement.scrollTop > 2000) {
        // alert("aswath");
        setpage1(3);
      }
    }
  });
  return (
    <div class="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              value={searchall}
              onChange={setsearch((e) => e.target.value)}
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-5"
        // onScroll={onScroll}
        // ref={listInnerRef}
      >
        {data.map((elem, id) => {
          // console.log(elem, id, "id");
          return (
            <>
              <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="object-cover h-30 w-50"
                    src={require(`../src/assets/${elem["poster-image"]}`)}
                    // src={img1}
                    alt="Sunset in the mountains"
                  />
                  <div class="py-0">
                    <p class="text-left text-white text-base">{`${elem.name}`}</p>
                    {/* <p class="text-left text-white text-base">{`${id}`}</p> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
