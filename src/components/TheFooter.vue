<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__inner">
                <div class="footer__first">
                    <img src="@/assets/logo.png" alt="logo" />
                    <div class="footer__text">
                        GEFCO joins a leading global logistics provider: CEVA
                        Logistics. Today, we are a global workforce of 110,000
                        people across 1,300 sites in more than 170 countries.
                        CEVA Logistics, part of the CMA CGM Group, is
                        headquartered in Marseille, France. With the addition of
                        GEFCO, CEVA gains a stronger European presence and
                        enhanced capabilities in automotive logistics, contract
                        logistics and ground transport. We are now one of the
                        largest logistics players in Europe: #2 in FVL, #4 in
                        CL, #7 in Ground transport. In addition, CEVA Logistics
                        is the 4th global provider of contract logistics
                        services. Together, we expect our global 2022 revenue to
                        reach $18 billion as we move closer to attaining our
                        vision of becoming a Top 5 global 3PL.
                    </div>
                </div>
                <div class="footer__sec-adres">
                    POLITRANS LOGIST SRL <br />
                    Str. Ciorescu 1 mun. Chisinau, MD-4839 Terminal Vamal
                    Cricova Republica Moldova <br />
                    Departament Transport <br />
                    +373 69994448 <br />
                    info@plt.md <br />
                    Departament Broker Vamal <br />+373 68006633 <br />
                    broker@plt.md
                </div>
                <div class="footer__first-adres">
                    S. C. PLT TRANSPORT S.R.L.
                    <br />
                    Str. Liliacului Nr. 47 RO-737512 Satu Nou Com. Muntenii de
                    Sus Vaslui , Romania
                    <br />

                    Departament Transport
                    <br />
                    +40 730 271 012
                    <br />
                    info@plt.md
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss">
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
        font-family: Georgia, 'Times New Roman', Times, serif;
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
        font-family: Georgia, 'Times New Roman', Times, serif;
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
