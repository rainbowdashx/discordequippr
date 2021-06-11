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
        <p>{item.text}</p>
        <button
            on:click={typeof skipHandler !== "undefined" && skipHandler(item.label)}
            >X</button
        >
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
</style>
