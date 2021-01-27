const countKeywords = (articles) => {
  const objectKeywords = articles.reduce((response, element) => {
    if (!(element.keyword in response)) {
      response[element.keyword] = 1;
    } else {
      response[element.keyword] += 1;
    }
    return response;
  }, {});
  const keywords = Object.entries(objectKeywords).sort((a, b) => b[1] - a[1]);
  return keywords.slice(0, 3).reduce((reducer, element, i) => {
    if (keywords.length > 3 && i === 2) {
      reducer.push(`${keywords.length - 2} другим`);
    } else {
      reducer.push(element[0]);
    }
    return reducer;
  }, []);
};

export default countKeywords;
