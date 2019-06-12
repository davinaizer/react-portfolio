import jsonData from '../App.json';

const getConfigData = () => JSON.parse(JSON.stringify(jsonData));

export default getConfigData;
