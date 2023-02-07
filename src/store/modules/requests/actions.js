export default {
  async contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-coach-finder-3c2d2-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-coach-finder-3c2d2-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }
  },
};
