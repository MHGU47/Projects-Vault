import React, { useMemo, useState } from 'react';
import { data } from '../constants'
import projects from '../projects.json'
import LookCard from './LookCard';
import Pagination from './Pagination'
import styles from './CSS/GlamPanel.module.css'

function GlamPanel({renderForMain}) {
  let panels = [];

  let PageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    //return data.slice(firstPageIndex, lastPageIndex);
    return projects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize]);


  //for (let index = 0; index < PageSize; index++) {panels.push(data[index])}
  for (let index = 0; index < PageSize; index++) {panels.push(projects[index])}

  if(renderForMain){
    return panels.map((panel) => <LookCard look={panel}/>)
  } else {
    return(
      <div>
        <div className={styles.cards}>
          {allProjects.map((item) => {
            console.log(item)
            return(<LookCard look={item}/>)
            })}
        </div>
        <nav>
          <Pagination
            className={styles.links}
            currentPage={currentPage}
            //totalCount={data.length}
            totalCount={projects.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </nav>
      </div>
    )
  }
}

export default GlamPanel