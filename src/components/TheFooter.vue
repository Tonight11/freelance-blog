<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__inner">
                <div class="footer__first">
                    <img src="@/assets/logo.png" alt="logo" />
                    <div class="footer__text">
                        {{ $t('footer.main') }}
                    </div>
                </div>
                <div class="advantage__row foot__row">
                    <div class="foot__column">
                        <div class="advantage__item foot__item">
                            <div class="advantage__info foot__info">
                                <p>
                                    POLITRANS LOGIST SRL <br />
                                    Str. Ciorescu 1 mun. Chisinau, MD-4839
                                    Terminal Vamal Cricova Republica Moldova
                                    <br />
                                    Departament Transport <br />
                                    <a href="tel:+37369994448">+373 69994448</a><br />
                                    <a href="mailto:info@plt.md">info@plt.md</a> <br />
                                    Departament Broker Vamal <br /><a href="tel:+37368006633">+373 68006633</a>
                                    <br />
									<a href="mailto:broker@plt.md">broker@plt.md</a>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="foot__column">
                        <div class="advantage__item foot__item">
                            <div class="advantage__info foot__info">
                                <p>
                                    S. C. PLT TRANSPORT S.R.L.
                                    <br />
                                    Str. Liliacului Nr. 47 RO-737512 Satu Nou
                                    Com. Muntenii de Sus Vaslui , Romania
                                    <br />

                                    Departament Transport
                                    <br />
									<a href="tel:+40730271012">+40 730 271 012</a><br />
                                    
                                    <br />
									<a href="mailto:info@plt.md">info@plt.md</a>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss">
.foot__row {
    justify-content: center;
    width: 100%;
}

.foot__column {
    max-width: 320px;
    max-height: 400px;

    flex: 1 1 33.333%;
    padding: 0 10px;

    @media (max-width: 992px) {
        flex: 0 1 50%;
    }

    @media (max-width: 597px) {
        flex: 0 1 100%;
    }
}
.foot__info {
    color: black;
}

.foot__item {
    pointer-events: none;
    box-shadow: 0 0 5px black !important;
    &::before {
        background-color: #00a08a !important;
        height: 120% !important;
    }
}
.footer {
    background-color: #484d52;
    padding: 30px 0;
    color: white;
    font-weight: 700;

    .footer__container {
        max-width: 1440px;
    }
    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 1188px) {
            flex-direction: column;
            align-items: start;
            row-gap: 30px;
            font-size: 16px;
        }
    }

    &__first {
        max-width: 700px;
        @media screen and (max-width: 1188px) {
            max-width: 100%;

            border-bottom: 2px solid white;
            padding-bottom: 30px;
        }

        img {
            margin: 0 auto 30px;
        }
    }

    &__text {
        font-size: 16px;
    }

    &__sec-adres {
        max-width: 220px;
        font-size: 16px;
        position: relative;
        @media screen and (max-width: 1188px) {
            max-width: 100%;
            border-bottom: 2px solid white;
            padding-bottom: 30px;
        }

        &::before {
            content: '';
            position: absolute;
            width: 2px;
            background-color: white;
            height: 100%;
            top: 0;
            left: -20px;

            @media screen and (max-width: 1188px) {
                content: none;
            }
        }
    }

    &__first-adres {
        max-width: 220px;

        position: relative;
        font-size: 16px;
        @media screen and (max-width: 1188px) {
            max-width: 100%;
            border-bottom: 2px solid white;
            padding-bottom: 30px;
        }

        &::before {
            content: '';
            position: absolute;
            width: 2px;
            background-color: white;
            height: 100%;
            top: 0;
            left: -20px;

            @media screen and (max-width: 1188px) {
                content: none;
            }
        }
    }
}
</style>
