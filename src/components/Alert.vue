<template>
    <div class="success callout">
        <div class="grid-x grid-padding-x">
            <div class="small-11 cell">
                {{ message }}
            </div>
            <div class="small-1 cell">
                <a @click="$emit('close')" class="close">&times;</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>