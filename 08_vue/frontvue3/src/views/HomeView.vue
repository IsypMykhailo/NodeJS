<template>
  <div class="home">
    <MyProfile></MyProfile><hr>
    <MyLogin></MyLogin>
    <MyRegister></MyRegister>
  </div>
</template>

<script>
// @ is an alias to /src
import MyLogin from '@/components/auth/MyLogin'
import MyProfile from '@/components/auth/MyProfile'
import MyRegister from '@/components/auth/MyRegister'
export default {
  name: 'HomeView',
  components: {
    MyRegister,
    MyProfile,
    MyLogin
  }
}
</script>
