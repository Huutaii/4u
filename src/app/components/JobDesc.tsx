'use client'

import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';

import { CiDollar, CiLocationOn, CiMedal, CiPen } from "react-icons/ci";
import { PiBriefcaseLight, PiGenderIntersex } from "react-icons/pi";
import { VscGitStashApply } from "react-icons/vsc";

import '@/styles/components/JobDesc.scss';

const JobDesc: React.FC<{
    title: string;
    salary: string;
    location: string;
    type: string;
    qualification: string;
    experience: string;
    gender: number | null;
    skill: string[];
    description: string;
}> = ({ title, salary, location, type, qualification, experience, gender, skill, description }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="job-desc">
                <div className="job-desc__heading">
                    <p className="h4 fw-bold text-center text-capitalize mb-3">{title}</p>
                    <ul>
                        <li className="text-sm">
                            <CiLocationOn />
                            <div>
                                <p className="text-sm fw-bold">Địa điểm</p>
                                <p>{location}</p>
                            </div>
                        </li>
                        <li>
                            <CiDollar />
                            <div>
                                <p className="text-sm fw-bold">Mức lương</p>
                                <p>{salary}</p>
                            </div>
                        </li>
                        <li>
                            <PiBriefcaseLight />
                            <div>
                                <p className="text-sm fw-bold">Hình thức</p>
                                <p>{type}</p>
                            </div>
                        </li>
                        <li>
                            <CiMedal />
                            <div>
                                <p className="text-sm fw-bold">Trình độ</p>
                                <p>{qualification}</p>
                            </div>
                        </li>
                        <li>
                            <CiPen />
                            <div>
                                <p className="text-sm fw-bold">Kinh nghiệm</p>
                                <p>{experience}</p>
                            </div>
                        </li>
                        <li>
                            <PiGenderIntersex />
                            <div>
                                <p className="text-sm fw-bold">Giới tính</p>
                                <p>{gender === 0 ? "Nữ" : gender === 1 ? "Nam" : "Không"}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <article dangerouslySetInnerHTML={{ __html: description }}>
                </article>
                <div className="job-desc__footer">
                    <p>Kỹ năng</p>
                    <ul>
                        {skill.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <button className="btn justify-content-center rounded-4 w-100 mt-4" onClick={() => setModalShow(true)}>
                    <VscGitStashApply/>
                    Ứng tuyển
                </button>
            </div>

            <ApplyModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default JobDesc;

const ApplyModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = (props) => {
    return (
        <Modal
            {...props}
            scrollable={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form>
                    <Tabs defaultActiveKey="cv" id="tab-apply" className="mb-4">
                        <Tab eventKey="cv" title="Form ứng tuyển">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <p className="fw-semibold mb-1">Họ và tên</p>
                                    <Form.Control type="text" name="name" />
                                </div>
                                <div className="col-6">
                                    <p className="fw-semibold mb-1">Sinh ngày</p>
                                    <Form.Control type="date" name="birthday" />
                                </div>
                                <div className="col-6 ">
                                    <p className="fw-semibold mb-1">Số điện thoại</p>
                                    <Form.Control type="tel" name="phone" />
                                </div>
                                <div className="col-6 ">
                                    <p className="fw-semibold mb-1">Email</p>
                                    <Form.Control type="email" name="email" />
                                </div>
                                <div className="col-12">
                                    <p className="fw-semibold mb-1">Giới thiệu bản thân</p>
                                    <Form.Control as="textarea" style={{ height: '200px' }} />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="test" title="Bài test">
                            <div>
                                <div className="mb-2">
                                    <p className="mb-1"><span className="fw-bold">Câu 1:</span> Aliquet blandit erat commodo laoreet faucibus; turpis lorem maecenas elementum.</p>
                                    <Form.Control as="textarea" rows={3} />
                                </div>
                                <div className="mb-2">
                                    <p className="mb-1"><span className="fw-bold">Câu 2:</span> Duis non mattis leo molestie natoque montes neque. Pharetra facilisi morbi ullamcorper elit taciti dapibus.</p>
                                    <Form.Control as="textarea" rows={3} />
                                </div>
                                <div className="mb-2">
                                    <p className="mb-1"><span className="fw-bold">Câu 3:</span> Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                                    <Form.Check type="radio" name='sentences3' id='sentences3-1' label='Diam potenti consequat a molestie' />
                                    <Form.Check type="radio" name='sentences3' id='sentences3-2' label='Condimentum in leo eu neque' />
                                    <Form.Check type="radio" name='sentences3' id='sentences3-3' label='Venenatis curae mollis phasellus felis vivamus laoreet vel placerat.' />
                                    <Form.Check type="radio" name='sentences3' id='sentences3-4' label='Pharetra facilisi morbi ullamcorper elit taciti dapibus' />
                                </div>
                                <div className="mb-2">
                                    <p className="mb-1"><span className="fw-bold">Câu 4:</span> Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
                                    <Form.Control as="textarea" rows={3} />
                                </div>
                                <div>
                                    <p className="mb-1"><span className="fw-bold">Câu 5:</span> Cras id dui. Aenean ut eros et nisl sagittis vestibulum.</p>
                                    <Form.Check type="checkbox" name='sentences5' id='sentences5-1' label='Maecenas ullamcorper, dui et placerat feugiat' />
                                    <Form.Check type="checkbox" name='sentences5' id='sentences5-2' label='Praesent metus tellus' />
                                    <Form.Check type="checkbox" name='sentences5' id='sentences5-3' label='Nulla neque dolor, sagittis eget' />
                                    <Form.Check type="checkbox" name='sentences5' id='sentences5-4' label='Vestibulum ante ipsum primis in faucibus' />
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline" onClick={props.onHide}>Huỷ</button>
                <button className="btn">Nộp CV</button>
            </Modal.Footer>
        </Modal>
    );
}