
const apiHost='https://bakesaleforgood.com'
export default fetchInitialDeal = async () => {
  try {
    const response = await fetch(apiHost + "/api/deals");
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("error in fetching data");
    console.error(error);
  }
};
