<template>
    <div>
        <div>{{$route.query.title || $route.params.title}}</div>
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Word'
}
</script>