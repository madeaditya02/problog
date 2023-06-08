<script setup>
defineProps(['title', 'posts'])
</script>
<template>
  <h1 class="text-4xl font-semibold">{{ title }}</h1>
  <div style="margin-top: 1rem;">
    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </div>
</template>