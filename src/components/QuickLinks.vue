<template>
    <div class="grid-x">
        <div class="medium-12 ">
            <div class="pull-right">
                <router-link v-for="component in components" :to="{ name: component.name }" class="button small"
                             v-show="(component.hidden !== true)">
                    {{ component.caption }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['components'],
    }
</script>

<style scoped>
    .button {
        margin-left: 5px
    }
</style>