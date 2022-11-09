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
                    GEFCO Forwarding Australia and New Zealand Headquarters Unit
                    7, 2-12 Beauchamp Road 2019 Banksmeadow - Sydney AUSTRALIA
                </div>
                <div class="footer__first-adres">
                    GEFCO Forwarding Australia and New Zealand Headquarters Unit
                    7, 2-12 Beauchamp Road 2019 Banksmeadow - Sydney AUSTRALIA
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
        }
    }

    &__first {
        max-width: 700px;
        @media screen and (max-width: 1188px) {
            max-width: 100%;
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
        font-size: 20px;
        position: relative;
        @media screen and (max-width: 1188px) {
            max-width: 100%;
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
        font-size: 20px;
        @media screen and (max-width: 1188px) {
            max-width: 100%;
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
