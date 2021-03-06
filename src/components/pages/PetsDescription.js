import React from 'react';

const PetsDescription = ({link = "/assets/images/image-home.png" }) => {
    return (
        <div className="component--pets-description">
            <div className="title-pets">Oscar</div>
            <div className="container-pets-container">
                <div className="left-part">
                    <img src={link} alt="" className="image-pets"/>
                </div>
                <div className="right-part">
                    <div className="container-info">
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                    </div>
                    <div className="container-info">
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                    </div>
                    <div className="container-info">
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                        <div className="container-title-info">
                            <div className="title-info">Name</div>
                            <input type="text" desibled defaultValue={"name"} placeholder="name"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetsDescription;