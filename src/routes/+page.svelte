<script lang="ts">
    import "./styles.scss";

    export let data;

    const variables = data.result.results.slice(1);
</script>

<section class="home">
    <div class="decoration">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
    </div>

    <div class="header">
        <div class="separator"></div>
        <div class="reservas">
            <p class="resrevas-value">USD {data.result.results[0].valor}</p>
            <p class="reservas-date">
                Reservas netas al día {data.result.results[0].fecha}
            </p>
        </div>
        <div class="bcra-logo">
            <img
                src="https://pbs.twimg.com/profile_images/1417542508066787330/L3r1GmVf_400x400.png"
                alt="bcra-logo"
            />
        </div>
    </div>

    <div class="variables">
        {#each variables as variable}
            <div class="variable">
                <p class="variable-title">
                    {variable.descripcion.substring(0, 20)}
                </p>
                <p />
                <p class="variable-value">{variable.valor}</p>
                <p />
                <div class="info-box">
                    <p class="info-button">i</p>
                    <p />
                    <p class="variable-date">{variable.fecha}</p>
                    <p />
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    .decoration {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -999;

        .circle-1 {
            background-color: var(--secondary-color);
            position: absolute;
            filter: blur(80px);
            width: 30vh;
            height: 30vh;
            right: 40%;
        }

        .circle-2 {
            background-color: var(--accent-color);
            position: absolute;
            filter: blur(80px);
            width: 60vh;
            height: 60vh;
            top: 20%;
            right: 0;
        }
    }

    .home {
        display: flex;
        margin: 0% 10% 0 10%;
        flex-direction: column;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3% 0 3% 0;

        .separator {
            width: 10%;
        }

        .reservas {
            display: flex;
            background-color: #b3d5da7b;
            border: 2px solid rgba(255, 255, 255, 0.502);
            border-radius: 16px;
            font-size: 1.5em;
            font-weight: bold;
            width: 40%;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 2%;

            .reservas-date {
                font-size: 0.6em;
                font-weight: 400;
            }
        }

        .bcra-logo {
            img {
                border-radius: 50%;
                max-width: 70px;
            }
        }
    }

    .variables {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 3%;
        grid-row-gap: 3%;

        .variable {
            border: 2px solid rgba(255, 255, 255, 0.502);
            background-color: #b3d5da;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.8em;
            padding: 5%;

            .variable-title {
                font-weight: 400;
                font-size: 1.2em;
            }

            .variable-value {
                font-weight: bolder;
                font-size: 2em;
                margin: 5%;
            }

            .info-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;

                .variable-date {
                    font-weight: normal;
                }
            }
        }
    }
</style>
