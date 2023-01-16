export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first.val,
      lastName: data.last.val,
      description: data.desc.val,
      hourlyRate: data.rate.val,
      areas: data.areas.val,
    };

    context.commit('registrationCoach', coachData);
  },
};
