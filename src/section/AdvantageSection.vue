<template>
    <div class="advantage">
        <div class="advantage__title">
            We invent lasting supply chain solutions
        </div>
        <div class="container">
            <div class="advantage__inner">
                <div class="advantage__row">
                    <div
                        class="advantage__column"
                        v-for="item in items"
                        :key="item.icon"
                    >
                        <div class="advantage__item">
                            <div class="advantage__name">{{ item.title }}</div>
                            <div class="advantage__text">{{ item.text }}</div>
                            <Icon :icon="item.icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const items = ref([
    {
        title: 'Over 15000',
        text: 'shipments annually',
        icon: 'bx:world',
    },
    {
        title: 'More than 500',
        text: 'long term customers',
        icon: 'bi:filetype-doc',
    },
    {
        title: '55',
        text: 'employees',
        icon: 'akar-icons:people-group',
    },
    {
        title: 'Bus',
        text: 'lorem',
        icon: 'cil:bus-alt',
    },
    {
        title: '532',
        text: 'annually',
        icon: 'carbon:earth-americas-filled',
    },
    {
        title: 'Over 15000',
        text: 'shipments annually',
        icon: 'file-icons:sandbox',
    },
])
</script>

<style lang="scss" scoped>
.advantage {
    margin-top: 80px;
    background-color: #4c5a63;
    &__inner {
    }

    &__title {
        padding: 15px 0px 50px;
        font-size: 28px;
        font-weight: 700;
        background-color: #f6f6f6;
        text-align: center;
    }

    &__row {
        padding: 50px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 20px;
        margin: 0 -10px;
    }

    &__column {
        flex: 0 1 33.333%;
        padding: 0 10px;

        @media (max-width: 992px) {
            flex: 0 1 50%;
        }

        @media (max-width: 597px) {
            flex: 0 1 100%;
        }
    }

    &__item {
        padding: 20px;
        border: 5px solid #ffcd00;
        color: white;

        svg {
            width: 35px;
            height: 35px;
        }
    }

    &__name {
        font-size: 20px;
        font-weight: 800;
    }

    &__text {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 100px;
    }
}
</style>
