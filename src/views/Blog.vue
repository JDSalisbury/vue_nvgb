<template>
  <div class="blog">
    <router-view />
    <router-link to="/">
      <v-btn class="back-button" depressed color="primary"> Back </v-btn>
    </router-link>
  </div>
</template>

<style>
.blog {
  min-height: 100vh;
}

.blog img {
  /* Keep images from expanding beyond their parent and into gutters */
  max-width: 100%;
}

.blog > section {
  /* This is the primary parent of the markdown content
  We're maxing it at 80% to create gutters on both sides
  and centering the contents within it. */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin: auto;
}

.blog > section > p {
  /* Most text blocks inside the markdown are inside <p>s this constrains
  them a bit further for readability's sake. See https://baymard.com/blog/line-length-readability */
  max-width: 55rem;
}

.back-button {
  margin: 1rem;
}
</style>
