import React from 'react';
import {Front, FrontHoldImage, CardLText, IconSet, FrontButton, FrontMb} from './PagesElements';
import {FaSearch,FaHandshake} from 'react-icons/fa';
import HighlightsSection from '../components/HighlightsSection';
import {BsFillShieldFill} from 'react-icons/bs';
import {HiFire} from 'react-icons/hi';
import {colors} from '../theme';
import {FiUsers} from 'react-icons/fi';

const Panel = () => {
    return (
        <>
                

                <HighlightsSection icon={<HiFire size={28} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>} title="Lo más popular" description="Estas zapas están que lo arden." call="https://api.flexeo.es/v1/recent-models"></HighlightsSection>
                <HighlightsSection icon={<FiUsers size={28} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>} title="Últimas novedades" description="De gente que sigues." call="https://api.flexeo.es/v1/recent-products"></HighlightsSection>    
                </>
    );
};
export default Panel;
