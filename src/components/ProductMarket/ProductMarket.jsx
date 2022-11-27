import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ProductMarket = () => {
    const history = useHistory();
    const [productMarketQuestions, setproductMarketQuestions] = useState([]);
    const [productMarketQuestionChoices, setproductMarketQuestionChoices] = useState([]);
    const [response, setResponse] = useState('');

    return (
        <center>
            <Box>
                <ProgressBar step={4} />
                <h2>Product and Market</h2>
                <p>Questions Here</p>
                <Button onClick={() => history.push('/business/model')}>Back</Button>
                <Button onClick={() => history.push('/ip/legal')}>Continue</Button>
            </Box>
        </center>
    )
}

export default ProductMarket;