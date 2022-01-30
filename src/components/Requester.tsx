import React from 'react';
import axios from 'axios';
import {RequesterProps} from '../types'

const Requester = async (props: RequesterProps) =>  {
    const {data} = await axios.get(props.url)
    console.log(data)
    return data.results

} 

export default Requester