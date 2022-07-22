import * as React from 'react';
import { Box } from '@mui/system';
import bannerImage from './Assets/img/banner.jpg';
import './styles.css';

export default function BannerImage() {
    return(
        <>
            <Box className="center" >
                <img src={bannerImage} alt="bannerImage" className="center" />
            </Box>
        </>
    )
}
