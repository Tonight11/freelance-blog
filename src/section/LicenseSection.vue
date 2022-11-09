<template>
    <div class="license">
        <div class="conatiner">
            <div class="license__inner">
                <div class="license__left">
                    <div class="license__title">
                        NEVER COMPROMISE ON QUALITY
                    </div>
                    <div class="license__def-text">
                        Our quality and environmental management system is
                        certified according to DIN EN ISO 9001 and 14001
                    </div>
                    <div class="license__un-text">
                        Video security in warehouses & GPS location of all
                        vehicles
                    </div>
                    <div class="license__def-text">
                        Certified Authorised Economic Operator (AEO F)
                    </div>
                    <div class="license__un-text">
                        HACCP concept with risk assessment in compliance with
                        legal requirements
                    </div>
                    <div class="license__def-text">
                        Member of German logistics-industry security initiative
                        Schutz-und Aktionsgemeinschaft zur Erhöhung der
                        Sicherheit in der Spedition (s.a.f.e)
                    </div>
                    <div class="license__un-text">
                        Regular employee training on all levels
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
        // justify-content: space-between;

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
        background-color: #c00719;
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
