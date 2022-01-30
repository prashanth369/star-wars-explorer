import axios from 'axios';
import { RequesterProps } from '../types';

const Requester = async (props: RequesterProps) =>  {
    const {data} = await axios.get(props.url);
    return data;

} 

export default Requester;