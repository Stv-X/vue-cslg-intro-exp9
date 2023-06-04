<template>
    <div style="margin-bottom: 10%;">
        <div class="grid-container">
            <div v-for="i in 10" :key="i" class="grid-item">
                <img class="image" :src="localImage(i)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewCom',
    computed: {
        localImage() {
            return (index) => require(`@/assets/views/view${index}.jpg`);
        }
    }
};
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    /* grid-gap: 10px; */
}

.grid-item {
    padding: 10px;
    border: whitesmoke 0.5px solid;
}

.image {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
}
</style>