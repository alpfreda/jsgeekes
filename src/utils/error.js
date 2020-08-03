function axiosErrorHelper(error) {
  return (
    (error && error.response && error.response.data) ||
    (error && error.response) ||
    error
  );
}

module.exports.axiosErrorHelper = axiosErrorHelper
