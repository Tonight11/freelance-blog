<template>
    <section id="awards" class="partners ptb5 plr5">
        <p class="partners-header block_header">Partners</p>
        <div class="partners-flex_container wow rotateInUpLeft">
            <img src="@/assets/partner/1.png" alt="" />
            <img src="@/assets/partner/2.jpg" alt="" />
            <img src="@/assets/partner/3.png" alt="" />
            <img src="@/assets/partner/4.png" alt="" />
            <img src="@/assets/partner/5.png" alt="" />
            <img src="@/assets/partner/6.jpg" alt="" />
            <img src="@/assets/partner/7.png" alt="" />
        </div>
        <div class="partners-flex_container wow rotateInUpLeft">
            <img src="@/assets/partner/8.png" alt="" />
            <img src="@/assets/partner/10.png" alt="" />
            <img src="@/assets/partner/10.png" alt="" />
            <img src="@/assets/partner/11.png" alt="" />
            <img src="@/assets/partner/12.png" alt="" />
            <img src="@/assets/partner/13.png" alt="" />
            <img src="@/assets/partner/14.png" alt="" />
        </div>
        <div class="partners-flex_container wow rotateInUpLeft">
            <img src="@/assets/partner/15.png" alt="" />
            <img src="@/assets/partner/16.png" alt="" />
            <img src="@/assets/partner/17.png" alt="" />
            <img src="@/assets/partner/18.jpg" alt="" />
            <img src="@/assets/partner/19.png" alt="" />
            <img src="@/assets/partner/20.png" alt="" />
            <img src="@/assets/partner/21.png" alt="" />
        </div>
        <div class="partners-flex_container wow rotateInUpLeft">
            <img src="@/assets/partner/22.png" alt="" />
            <img src="@/assets/partner/23.png" alt="" />
            <img src="@/assets/partner/24.png" alt="" />
            <img src="@/assets/partner/25.png" alt="" />
            <img src="@/assets/partner/26.png" alt="" />
            <img src="@/assets/partner/27.jpg" alt="" />
            <img src="@/assets/partner/28.png" alt="" />
            <img src="@/assets/partner/29.png" alt="" />
        </div>
        <div class="partners-mobile">
            <img class="wow zoomIn" src="@/assets/partner/1.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/2.jpg" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/3.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/4.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/5.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/6.jpg" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/7.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/8.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/10.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/10.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/11.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/12.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/13.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/14.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/15.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/16.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/17.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/18.jpg" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/19.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/20.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/21.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/22.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/23.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/24.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/25.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/26.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/27.jpg" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/28.png" alt="" />
            <img class="wow zoomIn" src="@/assets/partner/29.png" alt="" />
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss">
.block_header {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
    position: relative;
    display: inline-block;
    z-index: 1;
    margin-bottom: 5%;
}
.block_header::before {
    content: '';
    height: 0.25rem;
    position: absolute;
    top: 50%;
    left: 0;
    transition: transform 0.5s;
    z-index: -1;
}
.partners {
    background: #ecf0f2;
    height: 100vh;
}

.partners-header {
    color: black;
}
.partners-header::before {
    background: #ce1414;
    width: 20rem;
    opacity: 0.7;
    transform: translate(100%, -50%);
}
.partners-header:hover::before {
    transform: translate(0%, -50%);
    height: 0.75rem;
}

.partners-mobile {
    display: none;
}
.partners-flex_container {
    padding: 0 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2.5rem 0;
}

.partners-flex_container img {
    width: 7rem;
    margin: 0 2.5rem;
    transition: all 0.3s ease-in-out;
}
.partners-flex_container img:hover {
    cursor: pointer;
    transform: scale(1.125);
}
.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
}

@media (max-width: 900px) {
    .partners {
        height: 100vh;
        padding: 2% !important;
    }
    .partners-header {
        font-size: 2.5rem !important;
    }
    .partners-header::before {
        width: 20vw;
    }
    .partners-flex_container {
        display: none;
    }
    .partners-mobile {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        grid-gap: 1rem;
        padding: 2%;
    }
    .partners-mobile img {
        width: 80%;
    }
}
@media (max-width: 1500px) {
    .partners-flex_container {
        padding: 0 10%;
        margin: 2rem 0;
    }
    .partners-flex_container img {
        width: 5rem;
        margin: 0 2rem;
    }
}

.ptb5 {
    padding-top: 5%;
    padding-bottom: 5%;
}
.plr5 {
    padding-left: 5%;
    padding-right: 5%;
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        -ms-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
}
.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
}
</style>
