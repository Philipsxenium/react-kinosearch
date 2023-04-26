import React, {useState} from 'react';
import PeopleCard from "../components/Cards/PeopleCard";
import {useGetPopularPersonQuery} from "../Store/tmdbService/tmdb.api";
import Pagination from "../components/Pagination/Pagination";


const People:React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const {data} = useGetPopularPersonQuery(pageNumber);

    const onChangePage = (page: number) => {
        (setPageNumber(page))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div className='frameworks-container people'>
            <h2>Popular People</h2>
            <div className='people-content'>
                {data?.results.map((object) => (
                    <PeopleCard
                        key={object.id}
                        name={object.name}
                        knownFor={object.known_for}
                        profilePath={object.profile_path}
                    />
                ))}
                <div className='container people-pagination'>
                    <Pagination value={pageNumber} changePage={onChangePage} totalPage={data?.total_pages}/>
                </div>
            </div>
        </div>
    );
};

export default People;