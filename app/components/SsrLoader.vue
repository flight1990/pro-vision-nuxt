<template>
  <div class="loading">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading {
  background-color: #EDEDED;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 100px;
  height: 100px;
  border: 2px solid rgba(0, 0, 0, 0.2); /* светлый ободок */
  border-top: 2px solid #1e1d1d; /* яркая часть */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>