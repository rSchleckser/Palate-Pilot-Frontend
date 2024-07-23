const BASE_URL = 'http://localhost:3000/';

const getData = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const dataArray = data.results;
        return dataArray;
    } catch (error) {
        console.log('error: ', error);
    }
};

getData();

export {
    getData,
};