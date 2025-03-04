<script setup></script>

<template>
  <div class="h-full flex justify-center md:justify-center lg:justify-center flex-col gap-4">
    <div class="">
      <a-carousel :autoplay="true">
        <div>
          <div>
            <div class="flex items-center justify-center mb-12">
              <img class="w-1/2" src="@/assets/images/slide1.svg" alt="">
            </div>
            <h3 class="text-primary text-center text-2xl font-semibold">Book your nearest hospitals doctor on your time
            </h3>
          </div>
        </div>
        <div>
          <div>
            <div class="flex items-center justify-center mb-12">
              <img class="w-1/2" src="@/assets/images/slide2.svg" alt="">
            </div>
            <h3 class="text-primary text-center text-2xl font-semibold">
              take a token of your preferred doctor
            </h3>
          </div>
        </div>
        <div>
          <div>
            <div class="flex items-center justify-center mb-12">
              <img class="w-1/2" src="@/assets/images/slide3.svg" alt="">
            </div>
            <h3 class="text-primary text-center text-2xl font-semibold">
              manage your valuable time
            </h3>
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.ant-carousel .slick-dots-bottom) {
  bottom: 40px;
}

:deep(.ant-carousel .slick-dots li button) {
  height: 6px;
  border-radius: 3px;
  background: #1E5A84;
}
</style>
