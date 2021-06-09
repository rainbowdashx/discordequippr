<script>
    export let status = "";
    export let timer = "";

    let txtTime = [];
    setInterval(() => {
        try {
            txtTime = Object.keys(timer).map((x) => {
                let diff = new Date(new Date(timer[x]) - Date.now());
                return (
                    x +
                    " " +
                    diff.getMinutes() +
                    "m : " +
                    diff.getSeconds() +
                    "s"
                );
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
        <p>{item}</p>
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
