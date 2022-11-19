import axios from "axios";

export const getApiData = async () => {
    const response = await fetch(
        "http://80.232.239.44:4037/race_feed?type=default&token=secret123"
    ).then((response) => response.json());
    return response;
};
