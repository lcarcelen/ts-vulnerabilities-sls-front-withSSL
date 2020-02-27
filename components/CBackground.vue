<template lang="pug">
  .overflow-hidden.absolute
    .py-20.w-screen.h-screen.relative
      .hidden.sm_block.circle-back-topleft.bg-red-700.z-0.rounded-full.absolute.left-0.top-0
      .circle-back-bottomleft.w-56.h-56.bg-red-700.z-0.rounded-full.absolute.left-0.bottom-0
      .circle-back-topright.bg-red-700.z-0.rounded-full.absolute.right-0.top-0
      .circle-back-toprightcilinder.bg-red-700.z-0.rounded-full.absolute.right-0.top-0
      .circle-back-middle.bg-red-700.z-0.rounded-full.absolute.bottom-0
</template>
<style lang="stylus" scoped>
.circle-back
  &-topleft
    width: 410px;
    height: 410px;
    transform: translate(-43px, -24px);
  &-bottomleft
    transform: translate(-90px, 90px);
  &-topright
    width: 145px;
    height: 145px;
    transform: translate(-5px, 5px);
  &-middle
    width: 300px;
    height: 300px;
    transform: translate(590px, -50px);
  &-toprightcilinder
    width: 460px;
    height: 145px;
    transform: translate(55px, 110px) rotate(45deg);
</style>
