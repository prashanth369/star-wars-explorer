import * as asctionTypes from './actionTypes';
import { ActionTypeProps } from '../types';

export function buttonSelected(title: string): ActionTypeProps {
    return {
        type: asctionTypes.BUTTON_SELECTED,
        payload: {
            title
        }
    }
}