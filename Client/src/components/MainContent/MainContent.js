import axios from "axios";



export default {
    name: "MainContent",
    data() {
        return {
            msg: "hjkhjkhkj",
            errored: false,
            values: ["null"]
        };
    },

    mounted() {
        axios
            .get("https://localhost:5001/api/values")
            .then(response => {
                debugger;
                this.values = response.data;
                this.errored = false;
            })
            .catch(error => {
                debugger;
                console.log(error);
                this.errored = true;
            });
    }
};