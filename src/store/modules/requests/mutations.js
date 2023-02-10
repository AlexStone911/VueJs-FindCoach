export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state) {
    state.requests = ['xxx'];
  },
};
