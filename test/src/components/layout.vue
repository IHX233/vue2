<template>
<div>
    <div>
        <div>
            <router-link to="/count">Count</router-link>
        </div>
        <div>
            <router-link to="/count1">Count1</router-link>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
    
</template>
<script>
export default {
    name:'Layout'
}
</script>