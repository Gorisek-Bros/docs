<template>
  <span class="version-badge">
    <slot />
  </span>
</template>

<style scoped>
.version-badge {
  position: absolute;
  margin-left: 0.25rem;
  padding: 0.1rem 0.5rem;
  background-color: var(--c-brand) /* 3eaf7c */;
  font-weight: 500;
  font-size: 0.8rem;
  border-radius: 9999px;
}
</style>
