import React, { useState } from "react";
import Loader from "../Compenent/Loader";

const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ? <Loader /> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide Loader
    ];
};

export default useFullPageLoader;