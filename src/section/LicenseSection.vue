<template>
    <div class="license">
        <div class="conatiner">
            <div class="license__inner">
                <div class="license__left">
                    <div class="license__title">
                        {{ $t('license.title') }}
                    </div>
                    <div class="license__def-text">
                        {{ $t('license.first') }}
                    </div>
                    <div class="license__un-text">
                        {{ $t('license.sec') }}
                    </div>
                    <div class="license__def-text">
                        {{ $t('license.third') }}
                    </div>
                    <div class="license__un-text">
                        {{ $t('license.fourth') }}
                    </div>
                    <div class="license__def-text">
                        {{ $t('license.five') }}
                    </div>
                    <div class="license__un-text">
                        {{ $t('license.six') }}
                    </div>
                </div>
                <img class="license__img" src="@/assets/slider3.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.license {
    margin-top: 70px;
    color: white;
    &__inner {
        display: flex;
        gap: 50px;

        @media screen and (max-width: 998px) {
            flex-direction: column;
        }
    }
    &__left {
        flex: 0 1 50%;
        width: 50%;
        @media screen and (max-width: 998px) {
            width: 100%;
            flex: 0 1 100%;
        }
    }

    &__title {
        display: inline-block;
        padding: 5px 10px 5px 20px;
        background-color: #00a08a;
        font-size: 28px;
        margin-bottom: 40px;
    }

    &__def-text,
    &__un-text {
        font-size: 20px;
        padding-left: 20px;
        color: black;
        margin-bottom: 8px;
    }

    &__def-text {
    }
    &__un-text {
        opacity: 0.6;
    }

    &__img {
        flex: 0 1 50%;
        width: 50%;
        height: 500px;
        background-color: grey;
        object-fit: cover;
        @media screen and (max-width: 998px) {
            width: 100%;
            flex: 0 1 100%;
        }
    }
}
</style>
