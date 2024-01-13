import React from 'react'
import Background from '../../assets/background2.jpg';
import {
    IntroductionContainer,
    IntroImage,
    IntroContent,
    IntroTitle,
    IntroSubTitle,
    IntroSearch,
    IntroSearchContainer,
    IntroSearchOption,
    IntroSearchOpContent,
    IntroSearchOpTitle,
    IntroSearchButton,
    IntroSubtitle,
    IntroInputDate
} from './introduction.styles'
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import Modal from '../Modal/modal.component';
import StatesAndCitys from '../../utils/StateData';
import useStore from '../../useStore';

const Introduction = () => {

  const { openModal, setOpenModal, location } = useStore();
  return (
    <IntroductionContainer>
        {openModal && 
            <Modal 
            title='Select your location' 
            data={StatesAndCitys}
            type='citys'
        />}
        <IntroImage src={Background} />

        <IntroContent>
            <IntroTitle>best luxury <br /> car for rent <br /> today!</IntroTitle>
            <IntroSubTitle>Get a new experience in renting a car <br />
            easily and comfortably, leaving the <br />
            conventional way.
            </IntroSubTitle>
        </IntroContent>

        <IntroSearchContainer>
            <IntroSearch>
                <IntroSearchOption withBorder={true} onClick={() => setOpenModal(true)}>
                    <IoLocationSharp size="40" color="#3C2C2D" />
                    <IntroSearchOpContent>
                        <IntroSearchOpTitle>Location</IntroSearchOpTitle>
                        <IntroSubtitle>{location ? location : 'Select your location'}</IntroSubtitle>
                    </IntroSearchOpContent>
                </IntroSearchOption>

                <IntroSearchOption withBorder={false} >
                    <FaCalendarAlt size="40" color="#3C2C2D" />
                    <IntroSearchOpContent>
                        <IntroSearchOpTitle>Date</IntroSearchOpTitle>
                        <IntroInputDate type='date' />
                    </IntroSearchOpContent>
                </IntroSearchOption>

                <IntroSearchButton>
                    Search
                </IntroSearchButton>
            </IntroSearch>
        </IntroSearchContainer>
    </IntroductionContainer>
  )
}

export default Introduction