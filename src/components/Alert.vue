<template>
    <div :class="classes">
        <div class="grid-x grid-padding-x">
            <div class="small-11 cell">
                {{ message }}
            </div>
            <div class="small-1 cell" v-show="! notDismissible">
                <a @click="$emit('close')" class="close">&times;</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['message', 'color', 'notDismissible'],

        computed: {
            classes() {
                return this.color ? ['callout',  this.color ] : ['callout', 'success'];
            }
        }
    }
</script>