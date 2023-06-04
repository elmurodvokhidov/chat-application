import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Logout from './Logout';
import { RiRadioButtonLine } from 'react-icons/ri';
import { GrClose } from "react-icons/gr";

function Modal({ setMobileModal, mobileModal, chat, colorState, setColorState, refresh, colorArray }) {
    const person = chat?.people;

    function handleInput(e) {
        let color = e.target.id;
        let newColorArray = colorArray.filter(val => val !== color);
        let a = newColorArray[0];
        let b = newColorArray[1];
        let c = newColorArray[2];
        // console.log(a, b, c);
        setColorState({
            color: localStorage.getItem(color) === 'false' ? localStorage.setItem(color, 'true') : null,
            a: localStorage.setItem(a, false),
            b: localStorage.setItem(b, false),
            c: localStorage.setItem(c, false),
        });
        refresh();
    }

    // console.log(colorState);

    return (
        <div className='mainModal p-2'>
            <div className="card-body d-flex align-items-center justify-content-between p-3 mb-3">
                <h1>Settings</h1>
                <button className='btn btn-danger' onClick={() => setMobileModal({ ...mobileModal, modal1: !mobileModal.modal1 })}><GrClose /></button>
            </div>
            <div className="chatAppState1 p-1 d-flex flex-column gap-2">
                {/* All group members */}
                <div className="people">
                    <button onClick={() => setMobileModal({ ...mobileModal, modal2: !mobileModal.modal2 })} style={{ backgroundColor: colorState.color1 === 'true' ? '#8774E1' : colorState.color2 === 'true' ? '#0D6EFD' : colorState.color3 === 'true' ? '#C06C84' : colorState.color4 === 'true' ? 'black' : 'null', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span>Group Members</span>
                        {mobileModal.modal2 ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                    </button>
                    <div className="collapse" id="collapseExample">
                        {
                            person?.map((val, ind) => (
                                <div className="card-body d-flex p-3 justify-content-between" key={ind}>
                                    <div className="cardRight">
                                        <div className="cardLeft">
                                            <img src={val.person.avatar} alt={val.person.username} />
                                        </div>
                                        <p>{val.person.first_name} {val.person.last_name}</p>
                                    </div>
                                    <div className="isOnline">{val.person.is_online ? <span style={{ color: 'green' }}><RiRadioButtonLine /></span> : <span style={{ color: 'red' }}><RiRadioButtonLine /></span>}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* All media */}
                <div className="people">
                    <button onClick={() => setMobileModal({ ...mobileModal, modal3: !mobileModal.modal3 })} style={{ backgroundColor: colorState.color1 === 'true' ? '#8774E1' : colorState.color2 === 'true' ? '#0D6EFD' : colorState.color3 === 'true' ? '#C06C84' : colorState.color4 === 'true' ? 'black' : 'null', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                        <span>Photos</span>
                        {mobileModal.modal3 ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                    </button>
                    <div className="collapse" id="collapseExample1">
                        <div className="card-body d-flex p-3 justify-content-between flex-wrap gap-3">
                            {
                                chat?.attachments
                                    .map((itm, ind) => (
                                        <div className="imgContainer" key={ind}><img src={itm.file} alt={itm.created} /></div>
                                    ))
                            }
                        </div>
                    </div>
                </div>

                {/* Choose your theme color */}
                <div className="themeColor">
                    <button onClick={() => setMobileModal({ ...mobileModal, modal4: !mobileModal.modal4 })} style={{ backgroundColor: colorState.color1 === 'true' ? '#8774E1' : colorState.color2 === 'true' ? '#0D6EFD' : colorState.color3 === 'true' ? '#C06C84' : colorState.color4 === 'true' ? 'black' : 'null', width: '100%', fontSize: '17px', }} className="btn d-flex justify-content-between t-align-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample1">
                        <span>Theme color</span>
                        {mobileModal.modal4 ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                    </button>
                    <div className="collapse" id="collapseExample2">
                        <div className="card-body d-flex p-3 justify-content-between flex-wrap gap-3">
                            <div className="form-check">
                                <input onInput={(e) => handleInput(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="color1" defaultChecked />
                                <label className="form-check-label" htmlFor="color1">
                                    Crocus Purple
                                </label>
                            </div>
                            <div className="form-check">
                                <input onInput={(e) => handleInput(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="color2" />
                                <label className="form-check-label" htmlFor="color2">
                                    Brandeis Blue
                                </label>
                            </div>
                            <div className="form-check">
                                <input onInput={(e) => handleInput(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="color3" />
                                <label className="form-check-label" htmlFor="color3">
                                    Turkish Rose
                                </label>
                            </div>
                            <div className="form-check">
                                <input onInput={(e) => handleInput(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="color4" />
                                <label className="form-check-label" htmlFor="color4">
                                    Brandeis Blue
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Logout colorState={colorState} />
            </div>
        </div>
    );
}

export default Modal;