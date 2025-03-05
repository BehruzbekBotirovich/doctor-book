<template>
    <div class="py-4">

        <a-carousel dot-position="bottom" class="custom-carousel ">
            <a-carousel-item v-for="(slide, index) in slides" :key="index">
                <div class="carousel-slide relative" :style="{ backgroundImage: `url(${slide.img})` }">
                    <div class="carousel-content space-y-4 md:space-y-6 lg:space-y-10 ">
                        <h1 class="text-lg md:text-3xl  lg:text-5xl font-bold">{{ slide.title }}</h1>
                        <p class="text-sm lg:text-base ">{{ slide.subtitle }}</p>
                        <a-button type="primary" class="carousel-button">Batafsil</a-button>
                    </div>
                    <div class="cover-darking"> </div>
                </div>
            </a-carousel-item>
        </a-carousel>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
    {
        title: 'В Узбекистане началась вспышка коклюша?',
        subtitle: ' Сейчас по городу растет заболеваемость коклюшем. Каждый день в больницу поступают по 20–30 человек. У них там не хватает места, из-за чего произошел скандал. ',
        img: 'https://api.uznews.uz/storage/uploads/posts/images/68110/inner/h8MMjIVdKi.jpg',
    },
    {
        title: 'В Узбекистане провели первую операцию по пересадке DIEP-лоскута на место мастэктомии',
        subtitle: 'Известный российский хирург Дмитрий Мельников провел мастэктомию с непосредственным восстановлением посредством пересадки DIEP-лоскута.',
        img: 'https://api.uznews.uz/storage/uploads/posts/images/55474/inner/qqJzXPhiLr.jpg'
    },
    {
        title: 'Prezidentimiz nimadir dedi qarsaklar 👏👏👏👏👏',
        subtitle: 'bu yerda yangilik boladi ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpMExO47mun0x0rH0zaLpdEM9iiuD5l_rXw&s',
    },
]);
</script>

<style scoped>
.custom-carousel {
    width: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
}

.carousel-slide {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    height: 530px;
    color: white;

    @media(max-width:980px) {
        height: 450px;
    }

    @media(max-width:760px) {
        height: 400px;
    }

    @media(max-width:610px) {
        height: 350px;
    }

    @media(max-width:560px) {
        height: 300px;
    }
}

.carousel-content {
    position: relative;
    z-index: 2;
    max-width: 80%;
    padding: 4rem;
    border-radius: 8px;

    @media(max-width:980px) {
        padding: 3rem;
        max-width: 90%;
    }

    @media(max-width:780px) {
        padding: 2rem;
        max-width: 100%;
    }

    @media(max-width:560px) {
        padding: 1rem;
    }
}

.cover-darking {
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}


/*btn  ================ */
.carousel-button {
    background-color: #32BAAA;
    border-color: #32BAAA;
    color: white;
    padding: 0 30px;
    height: 40px;
    font-weight: bold;
    margin-top: 20px;

    @media(max-width:610px) {
        padding: 0 16px;
        height: 30px;

    }
}

.carousel-button:hover {
    background-color: #299d90;
    border-color: #299d90;
}



/* dots */
:deep(.slick-dots) {
    justify-content: start;
    padding-left: 60px;

    @media(max-width:610px) {
        padding-left: 45px;
    }

    @media(max-width:560px) {
        padding-left: 1rem;
    }

}

:deep(.slick-dots> .slick-active>button) {
    background-color: #32BAAA !important;
}

:deep(.slick-dots>li>button) {
    height: 8px;
    border-radius: 999px;
}

:deep(.slick-dots) {
    bottom: 30px;
}
</style>