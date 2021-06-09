<script>
    export let status = "";
    export let timer = "";

    let txtTime = "";
    setInterval(() => {
        if (!isNaN(timer)) {
            let diff = new Date(new Date(timer) - Date.now());
            txtTime = diff.getMinutes() + "m : " + diff.getSeconds() + "s";
        }
        if(txtTime.indexOf("NaN")> -1){
            txtTime = ""
        }
    }, 1000);

</script>

<div>
    <p>{status}</p>

    <p>{txtTime}</p>
</div>

<style>
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    p {
        color: orange;
    }
</style>
