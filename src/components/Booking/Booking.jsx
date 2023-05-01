import React, { useState } from 'react';
import LeftSide from '../Shared/LeftSide/LeftSide';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Booking.css'
import { FaCalendarAlt } from "react-icons/fa";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { tr } from 'date-fns/locale';

const Booking = () => {
    const [hidden, sethidden] = useState(true);
    const [hidden2, sethidden2] = useState(true);
    const [date, setDate] = useState(null)
    const [date2, setDate2] = useState(null)

    const handleSelect = (date) => {
        console.log(date);
        setDate(date)
    }

    const handleSelect2 = (date) => {
        console.log(date);
        setDate2(date)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 my-margin'>
                    <LeftSide>
                        <div>From Booking</div>
                    </LeftSide>
                </div>
                <div className='col-12 col-md-6 my-margin'>
                    <Form className='border-box'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control className='input-background' type="text" placeholder="where are you located?" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control className='input-background' type="text" placeholder="Where are you going?" />
                        </Form.Group>

                        <div className='d-flex gap-2'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>From</Form.Label>
                                <div className='d-inline-flex align-items-center pointer'>
                                    <Form.Control className='input-background' type="text" placeholder="From Date?" value={date}></Form.Control>
                                    <span onClick={() => sethidden(!hidden)} className='cursor-pointer' style={{ marginLeft: '-30px' }}><FaCalendarAlt />
                                        {hidden || <Calendar
                                            date={new Date()}
                                            onChange={handleSelect}
                                            className={hidden ? 'visually-hidden' : ''}
                                        />}
                                    </span>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>To</Form.Label>
                                <div className='d-inline-flex align-items-center pointer'>
                                    <Form.Control className='input-background' type="text" placeholder="To Date?" value={date2}></Form.Control>
                                    <span className='cursor-pointer' onClick={() => sethidden2(!hidden2)} style={{ marginLeft: '-30px' }}><FaCalendarAlt />
                                        {hidden2 || <Calendar
                                            date={new Date()}
                                            onChange={handleSelect2}
                                            className={hidden2 ? 'visually-hidden' : ''}
                                        />}</span>
                                </div>
                            </Form.Group>
                        </div>

                        <Button className='w-100' variant="warning" size="lg" type="submit">
                            Start Booking
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;