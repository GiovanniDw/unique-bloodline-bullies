<template>
  <main>
    <div class="full">
      <img src="../assets/cover/cover-1.png" alt="" />
    </div>
    <h1>This is an about page</h1>
    <div class="white-space">Space</div>
    <div class="white-space">Space</div>
    <div class="white-space">Space</div>
    <div class="white-space">Space</div>
    <div class="white-space">Space</div>
  </main>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }
}

.full {
  border-radius: 30px;

  img {
    width: 100%;
    border-radius: 20px;
  }
}
</style>
