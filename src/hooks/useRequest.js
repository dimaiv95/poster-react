import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRequest = (request, selector, dispathRequest, dispathSuccess, dispathError) => {
    const dispath = useDispatch();
    
    const { loading, data, error } = useSelector(state => {
        return{
            loading: state.loading,
            data: state[selector] ? state[selector] : null,
            error: state.error
        }
    });

    useEffect(() => {
        dispath(dispathRequest());
    
        let cancelled = false;
    
        request()
            .then(response => {
                if(response.status !== 200){
                    throw new Error("Failed to fetch movies");
                }
                if(response.data.Error){
                    throw new Error("Failed to fetch movies");
                }
                !cancelled && dispath(dispathSuccess(response));
            })
            .catch(({ message }) => {
                !cancelled && dispath(dispathError(message));
            });
    
        return () => cancelled = true;
    
    }, [request, dispathRequest, dispathSuccess, dispathError]);

    return { loading, data, error };
};

export default useRequest;