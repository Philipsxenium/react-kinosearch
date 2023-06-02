import React from 'react';
import {Link} from "react-router-dom";
import {genderArr} from "../../../mock/statick";
import {IDetails} from "../../../Store/tmdbService/@types";

type InfoType = {
    data: IDetails | undefined,
    keyType: boolean
}
const Info: React.FC<InfoType> = ({data, keyType}) => {

    return (
        <div className='page-info'>
            <div className='page-info-links'>
                {keyType && <h2>Personal Info</h2>}
                <ul>
                    <li>
                        <Link to={`https://twitter.com/${data?.external_ids.twitter_id}`}>
                            <i className='fa fa-twitter'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={`https://www.facebook.com/${data?.external_ids.facebook_id}`}>
                            <i className='fa fa-facebook'></i>
                        </Link>
                    </li>
                    {!keyType &&
                        <li>
                            {data?.homepage &&
                                <Link to={`${data?.homepage}`}>
                                    <i className='fa fa-home'></i>
                                </Link>
                            }
                        </li>
                    }
                </ul>
            </div>
            {keyType
                ? <>
                    <div className='page-info-other'>
                        <h3>Known For</h3>
                        <p>{data?.known_for_department}</p>
                    </div>
                    <div className='page-info-other'>
                        <h3>Gender</h3>
                        <p>{genderArr[data?.gender! - 1]}</p>
                    </div>
                    <div className='page-info-other'>
                        <h3>Birthday</h3>
                        <p>{data?.birthday}</p>
                    </div>
                    {data?.deathday &&
                        <div className='page-info-other'>
                            <h3>Deathday</h3>
                            <p>{data?.deathday}</p>
                        </div>
                    }
                    <div className='page-info-other'>
                        <h3>Place of birth</h3>
                        <p>{data?.place_of_birth}</p>
                    </div>
                </>
                : <>
                    <div className='page-info-other'>
                        <h3>Status</h3>
                        <p>{data?.status}</p>
                    </div>
                    <div className='page-info-other'>
                        <h3>Release date</h3>
                        <p>{data?.release_date ? data?.release_date : data?.first_air_date}</p>
                    </div>
                    {data?.last_air_date && <div className='page-info-other'>
                        <h3>End date</h3>
                        <p>{data?.last_air_date}</p>
                    </div>
                    }
                    {data?.number_of_seasons && <div className='page-info-other'>
                        <h3>Number of seasons</h3>
                        <p>{data?.number_of_seasons}</p>
                    </div>
                    }
                    {data?.number_of_episodes && <div className='page-info-other'>
                        <h3>Number of episodes</h3>
                        <p>{data?.number_of_episodes}</p>
                    </div>
                    }
                    {data?.budget && <div className='page-info-other'>
                        <h3>Budget</h3>
                        <p>$ {data?.budget},00</p>
                    </div>
                    }
                    {data?.revenue && <div className='page-info-other'>
                        <h3>Revenue</h3>
                        <p>$ {data?.revenue},00</p>
                    </div>
                    }
                </>
            }
        </div>
    );
};

export default Info;