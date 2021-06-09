<script>
    import { userName } from "./store.js";
    import jQ from "jquery";

    setTimeout(() => {
        $userName =  jQ(
            "[class^=avatarWrapper] ~ div  [class*=usernameContainer]"
        ).text();
    }, 500);
</script>

<input type="text" placeholder="Username" bind:value={$userName} />
