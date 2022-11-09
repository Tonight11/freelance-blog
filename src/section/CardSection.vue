<template>
    <div class="oferte">
        <div class="container">
            <div class="oferte__inner">
                <div class="oferte__title">
                    Lorem ipsum dolor sit amet consectetur
                </div>
                <div class="oferte__subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam dolor alias iusto!
                </div>
                <div class="oferte__row">
                    <div
                        class="oferte__column"
                        v-for="item in items"
                        :key="item.title"
                    >
                        <div class="oferte__item">
                            <div class="oferte__name">{{ item.title }}</div>
                            <img :src="item.img" :alt="item.title" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
    {
        title: 'Import/Export services',
        img: 'https://tvrm-s3.fra1.cdn.digitaloceanspaces.com/superdesk/2022100413108/20017f165b2b8dceb90c70e675548e510c519c873c524fc2121fe234f63304a0.jpg',
    },
    {
        title: 'Brokerage Services',
        img: 'https://www.picpedia.org/chalkboard/images/brokerage-services.jpg',
    },
    {
        title: 'Cargo consolidation',
        img: 'https://www.shiplilly.com/wp-content/uploads/2016/04/cargo-consolidation-846x551.jpeg',
    },
    {
        title: 'Storage Services',
        img: 'https://uploads-ssl.webflow.com/6109e4f8867aefa8bb6abba9/6184057e161a0765e802784a_fork-lift-moving-wooden-vaults.jpg-PacWest%20169%20Small.jpg',
    },
    {
        title: 'Transport services with and without refrigerators',
        img: 'https://www.airtecnics.com/media/webstructure/news/airtrack-recreation-installation-freezer-truck.jpg',
    },
])
</script>

<style lang="scss">
.oferte {
    padding-top: 50px;
    &__title {
        font-size: 32px;
        font-weight: 700;
    }

    &__subtitle {
        font-size: 24px;
        font-weight: 50;
        margin-bottom: 20px;
    }

    &__row {
        display: flex;
        flex-wrap: wrap;
        row-gap: 40px;
        margin: 0 -20px;
    }

    &__column {
        flex: 1 1 33.333%;
        padding: 0 20px;

        @media screen and (max-width: 992px) {
            flex: 1 1 50%;
        }

        @media screen and (max-width: 768px) {
            flex: 1 1 100%;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 2px solid rgb(65, 117, 83);
        padding: 15px;
        border-radius: 11px;

        transition: all 0.3s linear;

        &:hover {
            transform: translate(-5px, -5px);
        }

        img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
    }

    &__name {
        font-size: 16px;
        font-weight: 700;
        flex: 1;
        margin-bottom: 5px;
    }
}
</style>
