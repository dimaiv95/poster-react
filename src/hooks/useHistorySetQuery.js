import { useHistory } from "react-router-dom";

const useHistorySetQuery = () => {
    const { push } = useHistory();

    return (searchBy, currentPage) => push(`/?search=${ searchBy }&page=${ currentPage }`);
};

export default useHistorySetQuery;