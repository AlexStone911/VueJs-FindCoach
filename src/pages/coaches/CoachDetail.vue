<template>
    <div>
        <div v-if="!isContactRoute">
            <section>
                <base-card>
                    <h2>{{ fullName }}</h2>
                    <h3>${{ rate }}/hour</h3>
                </base-card>
            </section>
            <section>
                <base-card>
                    <header>
                        <h2>Interesting? Reach out now!</h2>
                        <base-button link
                                     :to="contactLink">Contact</base-button>
                    </header>
                </base-card>
            </section>
            <section>
                <base-card>
                    <base-badge v-for="area in areas"
                                :key="area"
                                :type="area"
                                :title="area"></base-badge>
                    <p>{{ description }}</p>
                </base-card>
            </section>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/contact';
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        },
        isContactRoute() {
            return this.$route.path.includes('contact');
        }
    }
}
</script>