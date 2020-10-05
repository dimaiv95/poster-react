import { useHistory } from "react-router-dom";

const useHistorySetQuery = () => {
    const { push, replace } = useHistory();

    return (searchBy, currentPage, type = "push") => {
        return type === "push" ?
            push(`/?search=${ searchBy }&page=${ currentPage }`) :
            type === "replace" && replace(`/?search=${ searchBy }&page=${ currentPage }`);
    
    }
};

export default useHistorySetQuery;