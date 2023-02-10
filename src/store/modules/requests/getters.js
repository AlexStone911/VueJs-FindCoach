export default {
  requests(state) {
    // const coachId = rootGetters.userId;
    return state.requests;
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
