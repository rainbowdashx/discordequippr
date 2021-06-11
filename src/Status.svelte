<script>
    export let status = "";
    export let timer = "";
    export let skipHandler;

    let txtTime = [];
    setInterval(() => {
        try {
            txtTime = Object.keys(timer).map((x) => {
                let diff = new Date(new Date(timer[x]) - Date.now());
                return {
                    label: x,
                    text:
                        x +
                        " " +
                        diff.getMinutes() +
                        "m : " +
                        diff.getSeconds() +
                        "s",
                };
            });
        } catch (error) {
            console.log(error);
        }
        if (txtTime.indexOf("NaN") > -1) {
            txtTime = "";
        }
    }, 1000);
</script>

<div>
    <p>{status}</p>

    {#each txtTime as item}
        <div class="wrapper">
            <p>{item.text}</p>
            <button
                on:click={typeof skipHandler !== "undefined" &&
                    skipHandler(item.label)}
            >
                🤫
            </button>
        </div>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    p {
        color: orange;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }

    button {
        background-color: transparent;
        color: orange;
        padding: 4px 10px;
        cursor: pointer;
        font-size: 12px;
        border: none;
    }
</style>
