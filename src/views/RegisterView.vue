<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const registerUser = () => {
    if(username.value && password.value && password.value === confirmPassword.value){
        alert('Registration Successfull')
        router.push('/login')
    }
    else{
        alert("Dont't Match, Please Type Correct One")
    }
}

</script>

<template>
    <section class="h-screen flex flex-col md:flex-row">
    <div class="w-1/2 h-screen shadow-md bg-base-200 flex justify-center items-center">
      <div class="w-2/3 bg-white p-10 shadow-xl rounded-2xl">
        <form @submit.prevent="registerUser">
          <div class="form-control">
            <label class="label" for="username">
              <span class="label-text">Username</span>
            </label>
            <input v-model="username" type="text" placeholder="Username" class="input input-bordered" />
          </div>
          <div class="form-control mt-5">
            <label class="label" for="password">
              <span class="label-text">Password</span>
            </label>
            <input v-model="password" type="password" placeholder="password" class="input input-bordered" />
          </div>
          <div class="form-control mt-5">
            <label class="label" for="confirm-password">
              <span class="label-text">Confirm Password</span>
            </label>
            <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="input input-bordered" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
        <p class="text-center mt-5 text-xl">Have A Account <span class="font-bold text-cyan-500 cursor-pointer"> <RouterLink to="/login">Please Login</RouterLink> </span></p>
      </div>
    </div>

    <div class="w-1/2">
      <img
        class="h-screen w-full"
        src="https://images.pexels.com/photos/11308990/pexels-photo-11308990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>

  </section>
</template>

<style scoped></style>