export const fetchData = async (
  apiFunc,
  params = null,
  body = null,
) => {
  return await apiFunc(params, body);
};
