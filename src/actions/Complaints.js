import * as api from '../api'

export const fetchAllComplaints = () => async(dispatch)=>{
    try {
        const {data} = await api.getAllComplaints();
        console.log("helooooooooooooooooooo", data);
        dispatch({type : "FETCH_ALL_COMPLAINTS" , payload : data})

    } catch (error) {
        console.log(error);
    }
}

export const postComplaint = (complaintData  , navigate)=> async(dispatch)=>{
    try {
        const {data} = await api.postComplaint(complaintData);
        dispatch({type : "POST_COMPLAINT" , payload : data})
        dispatch(fetchAllComplaints)
    } catch (error) {
        console.log(error);
    }
}