import React, { useState, useEffect } from "react";
import { getRequest } from '@utils/requests';
import { PAGES } from "@utils/pages";
import NavBar from "@components/NavBar"
import {
  Routes,
  Route
} from "react-router-dom";
import "./normalize.css";
import "./common.css";


function App() {
  const [pages, setPages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getPagesData = async () => {
      const pagesData = await getRequest("pages")
      setPages(pagesData.data)
      setIsLoading(false)
    }
    getPagesData()
  }, [])

  return (
    <>        
      <NavBar pages={pages} />
      <Routes>
        {
          !isLoading && pages.map((el) => {
            let Page = PAGES[el.url] 
            return (
              <Route exact key={el.id} path={"/recruitment-task" + el.url} element={<Page pageid={el.id}/>}/>
            )
          })
        }
      </Routes>
    </>
  );
}

export default App;
