
<script>
    import { authKey } from './store.js';

    function setLocalStorage(){
        try {
            localStorage.setItem("___equippr_token",$authKey);
        } catch (error) {
        }
    }

    if (auth){
        try {
            let auth =  localStorage.getItem("___equippr_token");
            $authKey = auth;
        } catch (error) {
        }
    }

</script>

<input type="text" placeholder="AUTH"  bind:value={$authKey} 	on:change={setLocalStorage}/>