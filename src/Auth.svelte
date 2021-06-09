
<script>
    import { authKey } from './store.js';

    function setLocalStorage(){
        localStorage.setItem("___equippr_token",$authKey);
    }


    let auth =  localStorage.getItem("___equippr_token");
    if (auth){
        $authKey = auth;
    }

</script>

<input type="text" placeholder="AUTH"  bind:value={$authKey} 	on:change={setLocalStorage}/>