import {SET_DATA, SET_FORM_VALUES, SET_LOADING} from "../types";
import axios from "axios";

export const getFormValues = (formValues) => (dispatch) =>{

    dispatch({
        type: SET_FORM_VALUES,
        payload: formValues
    })
}

export const updateBreakDown = (approvalData) => (dispatch) =>{

    dispatch({
        type: SET_LOADING

    })

    axios.post('https://us-central1-api-dump-7eb39.cloudfunctions.net/api/approve', approvalData).then((res) =>{

        dispatch({
            type:SET_DATA,
            payload: res.data
        })

        console.log(res)
    }).catch(err =>{
      console.log(err)
    })


}