import React from 'react';

import UploadForm from '../components/UploadForm';
import ProductForm from '../components/ProductForm';
import MixForm from '../components/MixForm';
import NavbarUser from '../components/NavbarUser';
import { SuperContainer } from './PagesElements';

const Upload = () => {
    return (
        <>
            <NavbarUser />
            <SuperContainer>
                <MixForm/>
            </SuperContainer>
        </>
    );
};
export default Upload;
