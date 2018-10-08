export const handleResponse = response =>
  function*(onSuccess, onFailde) {
    if (response.ok) {
      yield onSuccess(response.data);
    } else {
      yield onFailde(response.data);
    }
  };
