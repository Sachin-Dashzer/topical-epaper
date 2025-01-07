import React, { useState, useEffect } from "react";
import ShortBanner from "../../components/ShortBanner";
import { useDispatch } from "react-redux";
import { getFiles } from "../../store/fileStore";

const NewspaperPage = () => {
    const [newspaper, setNewspaper] = useState([]);
    const [activeMonth, setActiveMonth] = useState([]);
    const [activeBox, setActiveBox] = useState(0);

    const dispatch = useDispatch();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const getMonthNames = (data) => {
        return data.map((item) => {
            const dateParts = item?.date?.split("-");
            if (dateParts && dateParts.length > 1) {
                const monthIndex = parseInt(dateParts[1], 10) - 1;
                const monthName = monthNames[monthIndex];
                return { ...item, monthName };
            }
            return { ...item, monthName: "Unknown" };
        });
    };

    const getdata = async () => {
        try {
            const response = await dispatch(getFiles());
            const data = response?.payload?.data || [];
            const updatedData = getMonthNames(data);

            const currentIndex = monthNames.findIndex((item) => item === updatedData[0]?.monthName);

            const indexes = [
                currentIndex,
                (currentIndex - 1 + monthNames.length) % monthNames.length,
                (currentIndex - 2 + monthNames.length) % monthNames.length,
            ];

            setActiveMonth(indexes.map((index) => monthNames[index]));
            setNewspaper(updatedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);



    const checkActive = (index) => {

        if (activeBox === index) {
            setActiveBox(null)
            return;
        }
        setActiveBox(index);
    }


    return (
        <>
            <ShortBanner name="PSC Resources" />

            <section className="w-100 px-3">
                <div className="containerFull">
                    {
                        activeMonth.map((item, index) => {
                            return (
                                <div className={`monthBox ${(activeBox === index) ? "active" : ''}`}  key={index}>

                                    <div className="monthHeader bg-light" onClick={() => checkActive(index)}>
                                        <h3 className="sub_heading fontWeight700 font-heading">{item}</h3>
                                        <i className="fa-solid fa-angle-up small_heading"></i>

                                    </div>


                                    <div className="newspaperBox">
                                        <div className="newspaperBody">
                                            {
                                                newspaper?.filter(newItem => newItem.monthName === item).length === 0 ? (
                                                    <p className="title">Nothing Here</p>
                                                ) : (
                                                    newspaper
                                                        ?.filter(newItem => newItem.monthName === item)
                                                        .map((newItem, index) => (
                                                            <div key={index} className="w-100 px-1 px-md-3 pb-md-4 pb-3">
                                                                <div className="sliderItems shadow">
                                                                    <div className="uploadsBox">
                                                                        <div className="uploadImg">
                                                                            <img src={newItem.imgUrl} loading="lazy" alt={newItem.title} />
                                                                        </div>
                                                                        <div className="uploadsDate">
                                                                            <h3 className="title fontWeight700 text-capitalize text-center">{newItem.title}</h3>
                                                                            <p className="mt-1 text-secondary fontWeight700 text-center">({newItem.date})</p>
                                                                            <a href={`/download/${newItem._id}`} className="mt-md-3 mt-2 text-white">
                                                                                Download <span><i className="fa-solid fa-download"></i></span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                )
                                            }
                                        </div>
                                    </div>



                                </div>



                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default NewspaperPage;
