<template>
  <button @click="send">发送</button>
</template>

<script>
export default {
  name: "App",
  methods: {
    send() {
      this.$axios({
        method: "post",
        url: "api/send_massage?user_code=2021010407&msg=hello",
        // params: {
        //   user_code: "2021010407",
        //   msg: "hello world",
        // },
      }).then(
        (res) => {
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style>
</style>