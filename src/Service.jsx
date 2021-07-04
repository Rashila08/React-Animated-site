import React from 'react';
import Sdata from "./Sdata";
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid md-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((element,index)=>{
                                    return <Card 
                                        key={index}
                                        imgsrc={element.imgsrc}
                                        title = {element.title}
                                    />

                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service
