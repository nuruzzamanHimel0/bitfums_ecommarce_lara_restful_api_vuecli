<template >
    <div id="frontendmaster">
        <div class='container' >
            <compNavbar></compNavbar>

            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
import compNavbar from './nvabar.vue';
export default {
 
    data(){
        return {

        }
    },
    components: {
        compNavbar
    }
}
</script>