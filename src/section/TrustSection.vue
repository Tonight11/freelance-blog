<template>
    <div class="trust">
        <div class="container">
            <div class="trust__content">
                <div class="trust__inner">
                    <div class="trust__logo">
                        <img src="@/assets/logo.png" alt="logo" />
                    </div>
                    <div class="trust__info">
                        <div class="trust__name">TRUST DEMANDS COMMITMENT</div>
                        <div class="trust__text">
                            FIND OUT FOR YOURSELF! <br />
                            YOUR EMONS-TEAM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.trust {
    margin-top: 70px;
    background-image: url('@/assets/group.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 450px 0 0;

    &__content {
        display: flex;
        justify-content: center;
    }
    &__inner {
        display: flex;
        flex-direction: column;

        color: rgb(245, 69, 69);
        max-width: 400px;
        text-align: center;
    }

    &__logo {
        background-color: rgba(245, 69, 69, 0.7);

		padding: 20px;
		img {
			margin: 0 auto;
		}
    }

    &__info {
        background-color: white;
        padding: 20px 40px 40px;
    }

    &__name {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
    }

    &__text {
        font-weight: 600;
    }
}
.container {
}
</style>
