import React, { useState, useEffect } from 'react';
import ShortBanner from '../../components/ShortBanner';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFiles } from '../../store/fileStore';

const NewspaperPage = () => {
    const [newspaper, setNewspaper] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const dispatch = useDispatch();

    const { id } = useParams();

    const getdata = async () => {

        dispatch(getFiles()).then((response) => {
            console.log(response);

            const data = response?.payload?.data || [];

            setNewspaper(data);

            const selectedId = id || (data.length > 0 ? data[0]._id : null);
            setCurrentId(selectedId);

            const selectedData = data.find(item => item._id === selectedId);
            setCurrentData(selectedData);
        })
    };

    useEffect(() => {
        getdata();
    }, [id]); 

    useEffect(() => {
        // Update `currentData` whenever `currentId` or `newspaper` changes
        if (currentId && newspaper.length > 0) {
            const selectedData = newspaper.find(item => item._id === currentId);
            setCurrentData(selectedData);
        }
    }, [currentId, newspaper]);

    return (
        <>
            <ShortBanner name="Latest Newspaper" />

            <div className="w-100 px-3">
                <div className="newspaperBox">
                    <div className="row">
                        <div className="col-lg-8 px-md-4 pe-md-0 pt-4">
                            <div className="newspaperDetails text-capital p-4">
                                <h1 className="large_heading fontWeight800 text-primary">
                                    {currentData ? currentData.title : 'Loading...'}
                                </h1>

                                <div className="d-flex gap-md-5 gap-4">
                                    <p className="mt-3">
                                        <span className="fontWeight700 text-primary">Published on: </span>
                                        &nbsp; {currentData ? currentData.date : 'N/A'}
                                    </p>
                                    <p className="mt-3">
                                        <span className="fontWeight700 text-primary">Published by: </span>
                                        &nbsp; {currentData ? currentData.author : 'N/A'}
                                    </p>
                                </div>

                                <div className="newsImgBox shadow w-100 mt-md-4 mt-2">
                                    {currentData && (
                                        <img src={currentData.imgUrl} alt="" />
                                    )}
                                </div>

                                <h3 className="small_heading fontWeight700 mt-md-5 mt-4">Short Description</h3>
                                <p className="mt-md-3 mt-2 text">{currentData ? currentData.description : 'Loading...'}</p>

                                <a
                                    href={currentData ? currentData.fileUrl : '#'}
                                    className="btnTheme mt-md-4 mt-3"
                                >
                                    <span>Download Now</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 h-full p-md-5 py-5 px-4">
                            <div className="blockContainer w-full h-full">
                                <h4
                                    className="sub_heading text-center fontWeight700 mb-4"
                                    style={{ textDecoration: 'underline' }}
                                >
                                    Related Uploads
                                </h4>

                                {newspaper
                                    .filter((data) => data.category === 'newspaper')
                                    .map((data, index) => (
                                        <a key={index} className="d-block" href={`/news/${data._id}`}>
                                            <div className="smallBlock bg-light w-100 p-2 mt-4 shadow">
                                                <div className="row">
                                                    <div className="col-5 smallImgBlock">
                                                        <img src={data.imgUrl} alt="" className="object-fit-cover" />
                                                    </div>
                                                    <div className="col-7 py-2">
                                                        <h3 className="title text-capital text-dark fontWeight700">{data.title}</h3>
                                                        <div>
                                                            <p className="mt-2">
                                                                <span className="fontWeight700 text-primary">Published on:</span>
                                                                &nbsp; {data.date}
                                                            </p>
                                                            <p>
                                                                <span className="fontWeight700 text-primary">Published by:</span>
                                                                &nbsp; {data.author}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewspaperPage;
