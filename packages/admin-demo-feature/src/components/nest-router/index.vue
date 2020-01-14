<template>
  <div>
    <router-link class="padding-h-1" to="/nest-router/">/nest-router/</router-link>
    <router-link class="padding-h-1" to="/nest-router/profile">/nest-router/profile</router-link>
    <router-link class="padding-h-1"  to="/nest-router/posts">/nest-router/posts</router-link>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>
