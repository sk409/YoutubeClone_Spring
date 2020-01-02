import MyButton from "./components/button.vue";

new Vue({
    el: "#dashboard-videos",
    components: {
        MyButton,
    },
    data: {
        activeTab: "home"
    },
    created() {
        console.log("CREATED");
    }
});