<template>
    <div class="gallery">
        <p>teste</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'gallery' })
export default class Gallery extends Vue { }
</script>

<style lang="scss">
    .gallery {
        padding: 8rem;
    }
</style>
