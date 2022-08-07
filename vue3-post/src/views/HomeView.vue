<template>
  <div>
    <h2>Home View</h2>
    <button class="btn btn-primary" @click="moveToAbout">
      About 으로 이동
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

let router = useRouter();
let moveToAbout = () => {
  router.push("/about");
};
</script>

<style lang="scss" scoped></style>
