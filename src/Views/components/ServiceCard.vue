<template>
  <div class="service-card" @click="handleClick">
    <img :src="iconSrc" alt="icon" class="icon" />
    <h3>{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ServiceCard',
    props: {
      iconSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      navigateTo: {
        type: Function,
        required: false
      }
    },
    methods: {
      handleClick() {
        if (this.navigateTo) {
          this.navigateTo();
        }
      }
    }
  }
</script>

<style scoped>
.service-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card:hover {
  transform: scale(1.05);
}

.service-card .icon {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

h3 {
  font-weight: bold;
}

.description {
  color: #616d7c;
}
</style>