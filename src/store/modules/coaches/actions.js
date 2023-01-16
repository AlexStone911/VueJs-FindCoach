export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first.val,
      lastName: data.last.val,
      description: data.desc.val,
      hourlyRate: data.rate.val,
      areas: data.areas.val,
    };

    const response = await fetch(
      `https://vue-coach-finder-3c2d2-default-rtdb.europe-west1.firebasedatabase.app/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('registrationCoach', { ...coachData, id: userId });
  },
};
